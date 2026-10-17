#!/usr/bin/env node
/*
 * Smoke tests for the Travel Agency AI Academy (index.html).
 * Run: python3 build.py && node tests/smoke.cjs
 * Needs Playwright with Chromium. Set PLAYWRIGHT_MODULE to a custom module path if needed.
 * Exit code 0 = all checks passed, 1 = at least one failure.
 */
const path = require("path");
let pw;
for (const m of [process.env.PLAYWRIGHT_MODULE, "playwright", "/opt/node-tools/node_modules/playwright"]) {
  if (!m) continue;
  try { pw = require(m); break; } catch {}
}
if (!pw) { console.error("Playwright not found. Install it (npm i -D playwright) or set PLAYWRIGHT_MODULE."); process.exit(2); }

const FILE = "file://" + path.resolve(__dirname, "..", "index.html");
const MIN_CHAPTERS = 20;
const failures = [];
const check = (ok, msg) => { console.log((ok ? "  ✓ " : "  ✗ ") + msg); if (!ok) failures.push(msg); };

(async () => {
  const browser = await pw.chromium.launch();
  for (const [label, viewport] of [["desktop", { width: 1280, height: 900 }], ["phone", { width: 390, height: 800 }]]) {
    console.log(`\n${label} ${viewport.width}px`);
    for (const scheme of ["light", "dark"]) {
      const page = await browser.newPage({ viewport, colorScheme: scheme });
      const errors = [];
      page.on("pageerror", e => errors.push(e.message));
      page.on("console", m => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)|ERR_FAILED/.test(m.text())) errors.push(m.text()); });
      await page.route(/fonts\.(googleapis|gstatic)/, r => r.abort()); // must work without web fonts (Iran shutdown scenario)
      await page.goto(FILE);

      const ids = await page.evaluate(() => [...document.querySelectorAll("main > section")].map(s => s.id));
      if (scheme === "light") check(ids.length >= MIN_CHAPTERS, `${ids.length} chapters (expected ≥ ${MIN_CHAPTERS})`);
      const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
      if (scheme === "light") check(dup.length === 0, "chapter ids are unique");

      const overflow = [], empty = [];
      for (const id of ids) {
        await page.evaluate(i => { location.hash = i; }, id);
        await page.waitForTimeout(60);
        const info = await page.evaluate(i => {
          const s = document.getElementById(i);
          return { visible: !s.hidden, width: document.documentElement.scrollWidth, text: s.innerText.trim().length };
        }, id);
        if (!info.visible) empty.push(id + " (not shown)");
        if (info.text < 200) empty.push(id + " (little text)");
        if (info.width > viewport.width + 1) overflow.push(`${id}: ${info.width}px`);
      }
      check(overflow.length === 0, `${scheme}: no horizontal scroll` + (overflow.length ? " → " + overflow.join(", ") : ""));
      check(empty.length === 0, `${scheme}: every chapter renders content` + (empty.length ? " → " + empty.join(", ") : ""));

      // body must have a theme-token background (not transparent)
      const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      check(bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent", `${scheme}: body background is set (${bg})`);

      if (label === "desktop" && scheme === "light") {
        // links: internal data-go targets exist; external links open safely
        const links = await page.evaluate(() => {
          const ids = new Set([...document.querySelectorAll("main > section")].map(s => s.id));
          const badGo = [...document.querySelectorAll("[data-go]")].map(e => e.dataset.go).filter(g => !ids.has(g));
          const ext = [...document.querySelectorAll('a[href^="http"]')];
          const unsafe = ext.filter(a => a.target !== "_blank" || !/noopener/.test(a.rel)).map(a => a.href);
          const http = ext.filter(a => a.href.startsWith("http:")).map(a => a.href);
          return { badGo, unsafe, http, count: ext.length };
        });
        check(links.badGo.length === 0, "internal chapter links resolve" + (links.badGo.length ? " → " + links.badGo.join(", ") : ""));
        check(links.unsafe.length === 0, `${links.count} external links open in a new tab with rel=noopener` + (links.unsafe.length ? " → " + links.unsafe.slice(0, 3).join(", ") : ""));
        check(links.http.length === 0, "external links use https");

        // simulator: recorded run produces tool calls and a draft
        await page.evaluate(() => { location.hash = "sim"; });
        await page.click("#replayBtn");
        await page.waitForFunction(() => /INTERNAL NOTE/.test(document.querySelector("#draft").textContent), null, { timeout: 20000 }).catch(() => {});
        const sim = await page.evaluate(() => ({ calls: document.querySelector("#callCount").textContent, draft: document.querySelector("#draft").textContent }));
        check(/6 tool calls/.test(sim.calls), `simulator replay ran (${sim.calls})`);
        check(/REPLY TO CUSTOMER/.test(sim.draft) && /INTERNAL NOTE/.test(sim.draft), "simulator draft has both parts");

        // worksheet: add a task
        await page.evaluate(() => { location.hash = "day"; });
        await page.fill("#dTask", "Smoke test task");
        await page.fill("#dMin", "15");
        await page.click('#dayForm button[type="submit"]');
        const rows = await page.locator("#dayRows tr").count();
        check(rows >= 1, `worksheet accepts a task (${rows} rows)`);

        // online business ideas: 12 cards, filters narrow the list
        await page.evaluate(() => { location.hash = "online"; });
        const allIdeas = await page.locator("#ideaGrid .card").count();
        await page.click('#ideaFilters [data-f="Partner"]');
        const partnerIdeas = await page.locator("#ideaGrid .card").count();
        await page.click('#ideaFilters [data-f="all"]');
        check(allIdeas === 12 && partnerIdeas > 0 && partnerIdeas < allIdeas, `idea filters work (${allIdeas} all, ${partnerIdeas} partner)`);

        // templates: the Python model-test script must keep its \n escapes (a raw newline breaks it)
        await page.evaluate(() => { location.hash = "templates"; });
        const script = await page.evaluate(() => { const t = [...document.querySelectorAll("#tplList .tpl")].find(e => /Model test script/.test(e.textContent)); return t ? t.querySelector("pre").textContent : ""; });
        check(script.includes('split("\\n---\\n")') && script.includes('+ "\\n")'), "model test script keeps its escapes");

        // team chapter and specialist roles
        await page.evaluate(() => { location.hash = "team"; });
        const teamRows = await page.locator("#teamRows tr").count();
        await page.evaluate(() => { location.hash = "office"; });
        await page.click('#rolePhase [data-f="all"]');
        const roleCards = await page.locator("#roleGrid .card").count();
        check(teamRows >= 16 && roleCards === 13, `team table (${teamRows} jobs) and AI roles (${roleCards})`);

        // progress button
        await page.click("#doneBtn");
        check(/1 of/.test(await page.textContent("#overall")), "mark-as-done updates progress");
      }
      check(errors.length === 0, `${scheme}: no script errors` + (errors.length ? " → " + errors.slice(0, 3).join(" | ") : ""));
      await page.close();
    }
  }

  // storage blocked: the page must still work (private windows, blocked site data)
  console.log("\nstorage blocked");
  const ctx = await browser.newContext();
  await ctx.addInitScript(() => {
    const thrower = { get() { throw new Error("blocked"); } };
    Object.defineProperty(window, "localStorage", thrower);
  });
  const p2 = await ctx.newPage();
  const errs2 = [];
  p2.on("pageerror", e => errs2.push(e.message));
  await p2.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p2.goto(FILE);
  const navCount = await p2.locator(".navlink").count();
  check(navCount >= MIN_CHAPTERS && errs2.length === 0, `works without localStorage (${navCount} nav links, ${errs2.length} errors)`);
  await ctx.close();

  await browser.close();
  console.log(failures.length ? `\nFAILED: ${failures.length} check(s)` : "\nAll checks passed");
  process.exit(failures.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
