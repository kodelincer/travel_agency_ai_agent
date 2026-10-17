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
const MIN_CHAPTERS = 22;
// Chapters still marked data-fa="todo" (English only). This number may only go DOWN.
const MAX_TODO = 2;
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

        // Quick guide exists in both languages (13 roles each)
        await page.evaluate(() => { location.hash = "farsi"; });
        const qg = await page.evaluate(() => ({ en: document.querySelectorAll("#farsi .l-en tbody tr").length, fa: document.querySelectorAll("#farsi .l-fa tbody tr").length }));
        check(qg.en === 13 && qg.fa === 13, `quick guide has 13 roles in English and Persian (${qg.en}/${qg.fa})`);

        // progress button
        await page.click("#doneBtn");
        check(/1 of/.test(await page.textContent("#overall")), "mark-as-done updates progress");
      }
      check(errors.length === 0, `${scheme}: no script errors` + (errors.length ? " → " + errors.slice(0, 3).join(" | ") : ""));
      await page.close();
    }
  }

  // bilingual rule: language switch, RTL, real Persian in translated chapters, no overflow in Persian mode
  console.log("\nbilingual");
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 800 } });
    const errs = [];
    page.on("pageerror", e => errs.push(e.message));
    await page.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
    await page.goto(FILE);
    const persianRatio = id => page.evaluate(i => {
      // code blocks (scripts, JSON, commands) stay in Latin script by design, so leave them out of the measure
      const sec = document.getElementById(i), hidden = [...sec.querySelectorAll("pre, code")];
      hidden.forEach(e => { e.dataset.prevDisplay = e.style.display; e.style.display = "none"; });
      const t = sec.innerText.replace(/\s+/g, "");
      hidden.forEach(e => { e.style.display = e.dataset.prevDisplay; delete e.dataset.prevDisplay; });
      const fa = (t.match(/[\u0600-\u06FF]/g) || []).length, la = (t.match(/[A-Za-z]/g) || []).length;
      return { ratio: fa / Math.max(1, fa + la), len: t.length };
    }, id);
    const info = await page.evaluate(() => [...document.querySelectorAll("main > section")].map(s => ({ id: s.id, todo: s.dataset.fa === "todo", faTitle: !!s.dataset.titleFa })));
    const todo = info.filter(s => s.todo).map(s => s.id);
    check(todo.length <= MAX_TODO, `untranslated chapters: ${todo.length} (max ${MAX_TODO})`);
    check(info.every(s => s.faTitle), "every chapter has a Persian title");
    await page.click("#langBtn");
    const root = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, nav: document.querySelector(".navlink").innerText }));
    check(root.lang === "fa" && root.dir === "rtl" && /[\u0600-\u06FF]/.test(root.nav), `switch to Persian sets lang=fa, dir=rtl (${root.lang}, ${root.dir})`);
    await page.evaluate(() => { location.hash = "day"; });
    const ctl = await page.evaluate(() => ({ opt: document.querySelector("#dSys option").textContent, ph: document.querySelector("#dTask").placeholder, role: document.querySelector("#dRole option").textContent }));
    check(ctl.opt === "سپهر" && /[\u0600-\u06FF]/.test(ctl.ph) && /[\u0600-\u06FF]/.test(ctl.role), `worksheet drop-downs and placeholder switch to Persian (${ctl.opt})`);
    await page.evaluate(() => { location.hash = "map"; });
    const mp = await page.evaluate(() => ({
      cards: document.querySelectorAll("#caseGrid .card h4 .l-fa").length,
      emptyFa: [...document.querySelectorAll("#caseGrid .l-fa, #deskFilters .l-fa")].filter(e => !/[؀-ۿ]/.test(e.textContent)).length,
    }));
    check(mp.cards === 24 && mp.emptyFa === 0, `automation map: 24 cards with Persian titles, every card and desk filter has Persian (${mp.cards} cards, ${mp.emptyFa} without Persian)`);
    await page.evaluate(() => { location.hash = "templates"; });
    const tp = await page.evaluate(() => [...document.querySelectorAll("#tplList pre")].filter(p => p.offsetParent !== null).map(p => /[؀-ۿ]/.test(p.textContent)));
    check(tp.length === 6 && tp.filter(Boolean).length === 5, `templates: 6 visible, 5 in Persian in Persian mode (${tp.filter(Boolean).length}/${tp.length})`);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.evaluate(() => { location.hash = "sim"; });
    await page.click("#replayBtn");
    await page.waitForFunction(() => /INTERNAL NOTE/.test(document.querySelector("#draft").textContent), null, { timeout: 20000 }).catch(() => {});
    const sm = await page.evaluate(() => ({
      tier: document.querySelector("#tier option").textContent,
      status: document.querySelector("#simStatus").innerText,
      note: document.querySelector("#draft").textContent.split("INTERNAL NOTE:")[1] || "",
    }));
    const isFa = t => /[؀-ۿ]/.test(t);
    check(isFa(sm.tier) && isFa(sm.status) && isFa(sm.note), `simulator speaks Persian in Persian mode (option, status, internal note)`);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.reload(); // clear the Persian demo draft so the English-mode ratio check below measures the interface only
    const weak = [], overflow = [];
    for (const s of info) {
      await page.evaluate(i => { location.hash = i; }, s.id);
      await page.waitForTimeout(40);
      const w = await page.evaluate(() => document.documentElement.scrollWidth);
      if (w > 391) overflow.push(`${s.id}: ${w}px`);
      if (!s.todo) { const r = await persianRatio(s.id); if (r.ratio < 0.5 || r.len < 200) weak.push(`${s.id} (${Math.round(r.ratio * 100)}% Persian)`); }
    }
    check(weak.length === 0, "translated chapters show Persian text in Persian mode" + (weak.length ? " → " + weak.join(", ") : ""));
    check(overflow.length === 0, "no horizontal scroll in Persian mode" + (overflow.length ? " → " + overflow.join(", ") : ""));
    await page.click("#langBtn");
    const back = await page.evaluate(() => document.documentElement.dir);
    const enWeak = [];
    for (const s of info.filter(x => !x.todo)) {
      await page.evaluate(i => { location.hash = i; }, s.id);
      const r = await persianRatio(s.id);
      if (r.ratio > 0.25) enWeak.push(`${s.id} (${Math.round(r.ratio * 100)}% Persian)`);
    }
    check(back === "ltr" && enWeak.length === 0, "switching back shows English" + (enWeak.length ? " → " + enWeak.join(", ") : ""));
    check(errs.length === 0, "no script errors while switching language" + (errs.length ? " → " + errs.join(" | ") : ""));
    await page.close();
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
