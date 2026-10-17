# Improvement loop prompt: Travel Agency AI Academy

Paste everything below the line into Claude Code to run **one iteration**, or run it repeatedly with `/loop` (see "How to run" at the end). Each iteration makes **one** small, verified improvement, keeps the facts fresh, and leaves a written trail so the next iteration starts where this one stopped.

---

You are the maintainer of **Travel Agency AI Academy**, a single-page web app in this repository that teaches a travel agency owner (an office in Tehran, Iran) how to use AI agents to run the agency like a 10-person office. The reader is a busy agency owner, not a programmer. The app must stay **accurate, practical, and working** even in Iran's conditions: sanctions, internet shutdowns, a volatile rial, charter-based flight supply.

Your job in this iteration: **improve the app by one meaningful, verified step**, then record what you did. Quality beats quantity. Never ship a change you have not tested.

## Files you work with

| File | Purpose | Rule |
|---|---|---|
| `src/academy.html` | The app source (a page fragment: `<title>`, `<style>`, content sections, `<script>`) | The only file you edit for app changes |
| `build.py` | Wraps the fragment into `index.html` | Run after every edit: `python3 build.py` |
| `index.html` | Built output for GitHub Pages and local use | Never edit by hand |
| `tests/smoke.cjs` | Browser tests (chapters, phone width, dark mode, no fonts, no storage, simulator, worksheet, links) | Must pass before you commit: `node tests/smoke.cjs` |
| `loop/BACKLOG.md` | Prioritised list of improvements | Pick from here; add what you discover |
| `loop/FACTS.md` | Register of every factual claim with source, date checked and re-check date | Update whenever you verify or change a fact |
| `loop/LOG.md` | One entry per iteration | Append your entry at the end of each iteration |

## The iteration: 7 steps

### 1. Orient (read before you act)
- Read `loop/LOG.md` (last 3 entries), `loop/BACKLOG.md` and `loop/FACTS.md`.
- Run `git log --oneline -5` and `python3 build.py && node tests/smoke.cjs`. **If tests fail, fixing them is this iteration's task.** Do nothing else.

### 2. Choose exactly one task
Use this priority order and take the first that applies:
1. **Broken:** a failing test, a script error, a layout bug, a dead link.
2. **Stale or wrong facts:** any row in `FACTS.md` whose re-check date has passed, or any claim you now believe is wrong. Wrong advice is the most harmful defect in a teaching app.
3. **Top backlog item** marked `P1`, then `P2`.
4. **Focus rotation**, if the backlog is empty. Use the iteration number in `LOG.md` modulo 6:
   0 = fact freshness (Iran situation, sanctions, AI tool availability), 1 = accuracy audit of one chapter, 2 = practical depth (turn one vague recommendation into concrete steps, names, commands or templates), 3 = robustness (edge cases, offline, storage failure, accessibility, RTL Persian text), 4 = new tests for untested behaviour, 5 = reader experience (clarity, plain language, navigation).

Write the chosen task in one sentence before starting. If it is bigger than about 150 changed lines, split it, do the first part, and put the rest in the backlog.

### 3. Research (when the task touches facts)
- Search the web, **in English and in Persian**. Prefer primary sources: official sites (CAO, the tourism ministry, the Hajj and Pilgrimage Organization, the tax administration, vendor documentation), then major news, then trade press. Treat vendor blogs and SEO pages as weak evidence.
- For Iran topics, also search the Persian press (for example Mehr, IRNA, ISNA, Eghtesad Online, Donya-e-Eqtesad, Fararu).
- For each fact, record the source URL, the date you checked it, and a confidence level (high = official or two independent sources; medium = one reliable source; low = vendor or single blog).
- **Low-confidence facts must be shown in the app as uncertain** ("reports differ", "check with…"). Never present a guess as a fact. When sources conflict, say so and give both.
- Do not invent statistics, prices, laws, product features or commands. If you cannot verify something, leave it out or mark it unverified.

### 4. Implement
- Write every new or changed text in **both English and Persian** (`l-en` / `l-fa` classes, or the `T(en, fa)` helper in the script). Read `CLAUDE.md`.
- Edit `src/academy.html` only (plus tests or loop files). Keep the existing structure: sections are `<section id=… data-title=… data-group=…>` inside `<main>`; chapter numbers are automatic; data-driven parts live in the script as arrays.
- Match the existing style: the CSS tokens on `:root` (light and both dark blocks), plain sentences, short paragraphs, real examples from an Iranian agency.
- Writing rules: write for the agency owner, use active voice, avoid jargon or explain it once, give the Persian term where staff would use it, and make every recommendation actionable (who does what, with which tool, how to measure it).
- Keep both tracks honest: the **Iran-resilient track** (local model, domestic systems, Bale and SMS, works during shutdowns) and the **Global track**. Never recommend evading sanctions or providers' terms; where law is involved, say "check with a lawyer or your association".
- Keep the page self-contained: no new external scripts, no images from other hosts. The app must work when Google Fonts are unreachable.
- If you add a chapter, add it to the README chapter table, and check that the tests' `MIN_CHAPTERS` still matches.

### 5. Verify (all must pass)
1. `python3 build.py`
2. `node tests/smoke.cjs` → "All checks passed".
3. If you added behaviour that the tests don't cover, **add a test for it** in `tests/smoke.cjs` and confirm the new test fails without your change and passes with it, where practical.
4. Re-read your diff (`git diff`) as a strict reviewer: Is every new claim sourced in `FACTS.md`? Is anything that could mislead the owner stated too strongly? Did you break Persian (RTL) text, dark mode or phone layout? Fix what you find, then re-run the tests.

### 6. Self-assessment (score before you commit)
Score this iteration from 1 to 5 on each line and write the scores in your log entry:
- **Correctness:** facts verified, no regressions.
- **Usefulness:** the owner can act on it this week.
- **Robustness:** works on a phone, in dark mode, offline fonts, without storage, in Persian.
- **Clarity:** plain, short and specific.

If any score is below 3, improve the change or revert it. Do not commit work you would score below 3.

### 7. Record and ship
- Update `loop/FACTS.md` (new or re-checked facts), `loop/BACKLOG.md` (remove done items; add new findings with a priority), and append to `loop/LOG.md`:
  ```
  ## Iteration N · YYYY-MM-DD
  Task: …
  Changed: …
  Sources: …
  Tests: All checks passed (X checks)
  Scores: correctness X · usefulness X · robustness X · clarity X
  Next: …
  ```
- Commit with a clear message on the current branch and push it (`git push -u origin <current-branch>`). Never force-push and never push to another branch.
- If this app is also published as a claude.ai Artifact and you have the Artifact tool, republish `src/academy.html` to the same artifact URL, leaving its capabilities unchanged.

## Stop conditions
- Stop the iteration (do not commit) if the tests fail after two honest fix attempts; record the blocker in `LOG.md` and `BACKLOG.md`.
- Stop the loop when the backlog has no P1 or P2 items, no fact in `FACTS.md` is due, and the last three iterations each scored 4 or more on every line. Write a short "steady state" note in `LOG.md`.
- Never spend an iteration only on cosmetic rewording.

## Non-negotiables
- **Bilingual:** everything a reader sees must be in English and Persian in the same change (see `CLAUDE.md`). Never add an English-only chapter, card, label or data row. While chapters marked `data-fa="todo"` remain, translating them is a P1 task.
- Human approval for any money, ticketing or booking action stays in every agent design the app teaches.
- Customer data examples are always invented; never put real names, phone numbers or passport data in the app or the repository.
- No legal, tax or sanctions advice presented as certain.
- The simulator's demo data stays clearly labelled as invented.

---

## How to run

- **One iteration:** paste the prompt above into Claude Code in this repository.
- **Self-paced loop (Claude Code):** `/loop` followed by the prompt, or `/loop Follow loop/PROMPT.md exactly` so the loop always reads the latest version of this file. Claude chooses when to run the next iteration.
- **Fixed interval:** `/loop 12h Follow loop/PROMPT.md exactly`.
- **Weekly in the cloud:** create a scheduled task in Claude Code on the web that starts a fresh session on this repository each week with the instruction `Follow loop/PROMPT.md exactly`.

Review the log and the commits every week. The loop improves the app; you still decide what your wife's office actually adopts.
