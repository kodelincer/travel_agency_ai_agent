# Iteration log

Newest entry at the bottom. Each iteration appends one entry using the format in `loop/PROMPT.md`.

## Iteration 0 · 2026-10-17
Task: Set up the improvement loop.
Changed: Added `loop/PROMPT.md` (7-step iteration with research, verification and self-scoring), `loop/BACKLOG.md` (prioritised from the self-review chapter), `loop/FACTS.md` (25 facts with sources, confidence and re-check dates), `tests/smoke.cjs` (browser tests: 18 chapters, desktop and phone, light and dark, no web fonts, no localStorage, links, simulator replay, worksheet, progress), and `package.json` with an `npm test` script.
Sources: as listed in `loop/FACTS.md`.
Tests: All checks passed.
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: Backlog P1, starting with the licence rules for online sales (fact #13, due now).

## Iteration 1 · 2026-10-17
Task: Verify the rules for selling travel services online (fact #13, due) and correct the Iran chapter.
Changed: Iran chapter now explains the joint tourism–CAO directive (licensed offices and contracted representatives only), that the e-trust badge comes from the E-Commerce Development Center, and the Arbaeen 1405 rules (CAO list of authorised offices, extra seat fees banned). Added a checklist "Before an AI agent sells for you online". Updated the self-review uncertainty note and the Sources chapter.
Sources: https://www.chtn.ir/news/139407023 · https://borna.news/fa/news/2369162 · https://www.tinn.ir/بخش-گردشگری-4/167237
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — Sepehr / Parto / Charter724 integration checklist (fact #14).

## Iteration 2 · 2026-10-17
Task: Verify how agencies connect to Sepehr, Parto and Charter724 (fact #14) and add a "how to ask your integrator" checklist.
Changed: Tool stack flights card now names the integrators, the dedicated-Sepehr route, the typical API operations, subscription-gated docs and the Charter724 captcha step. Added "14 questions to ask about Sepehr, Parto or Charter724 access", including a separate read-only key for the AI agent, wallet-balance alerts, behaviour during shutdowns and data export. Updated the self-review note.
Sources: https://citynet.ir/service/sepehr/ · https://citynet.ir/service/charter-724/ · https://citynet.ir/web-service/airline/ · https://www.iran-tech.com/parto · https://basisfly.com (Sepehr page) · https://hiholiday.ir/webservice/flight/document
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — Persian model evaluation guide (fact #17, #18).

## Iteration 3 · 2026-10-17 (requested by the owner)
Task: New chapter on earning online with or beside Alibaba.ir-type platforms, world trends, and a new revenue department.
Changed: Added chapter "Online business ideas": how Iranian platforms earn, what is confirmed about working with Alibaba (group tours; no confirmed affiliate programme), four 2026 world trends, 12 filterable online business ideas with first steps, cost, time to revenue and shutdown-proof flag, and a 3-month plan to open an "Online Desk". Sources chapter, README and tests (idea filters, 19 chapters) updated. Removed two platform names I could not verify.
Sources: https://www.nature.com/articles/s41599-026-06782-3 · https://www.alibaba.ir/mag/alibabastories/alibaba-group-tour/ · https://digiato.com/iran-technology-news/alibabas-airline-and-bus-company-is-on-the-way · https://www.phocuswright.com/Travel-Research/Research-Updates/2026/tours-and-activities-are-outgrowing-travel-overall · https://skift.com/2026/08/10/inside-getyourguides-sixteen-year-road-to-profit/
Tests: All checks passed (new: idea filters)
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — Persian model evaluation guide.
