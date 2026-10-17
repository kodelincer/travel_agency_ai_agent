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

## Iteration 4 · 2026-10-17
Task: Persian model evaluation guide (P1; facts #17, #18).
Changed: Tool stack chapter has a new card "Choose your model in one afternoon": 5 steps (collect 50 anonymised messages, pull Gemma 3 27B / Qwen3 32B, start Ollama with OLLAMA_CONTEXT_LENGTH=65536, run the same task, score) and a 12-point scoring sheet. Templates chapter has a "Model test script (Python)" that calls Ollama's /api/chat and saves replies with timings. Self-review note updated.
Bug found and fixed: the script's \n escapes became real line breaks inside the page's template string, so the copied script was invalid Python. Found by running the copied text end to end against a fake Ollama server; fixed the escaping; added a regression test.
Sources: https://arxiv.org/pdf/2510.22616 · https://arxiv.org/pdf/2508.00673 · https://kaxo.io/insights/ollama-num-ctx-context-length/ · https://www.betterclaw.io/blog/ollama-context-window-truncates-agent-config
Tests: All checks passed (new: model test script keeps its escapes)
Scores: correctness 4 · usefulness 5 · robustness 5 · clarity 4
Next: P1 — re-check the Iran situation (facts #9, #10, #11).

## Iteration 5 · 2026-10-17
Task: Re-check the Iran situation (P1; facts #9–#11) and fix the timeline.
Changed: Iran timeline now separates the January shutdown from the 88-day war blackout (restored 26 May, filtering continues), adds the April first departures, and replaces the vague "Oct 2026 partial recovery" with the dated 8 October return of foreign flights (Iraqi Airways Najaf–Tehran under a US waiver; Iraq allows Iranian airlines except Mahan up to 40 daily Najaf flights). Currency/inflation updated to ~2.66M rials per USD (16 Oct) and 89.8% CPI (September). Fixed "most of 2026" wording in three places, the Resilience shocks table and the self-review note. Sources chapter updated.
Sources: https://www.newarab.com/news/iraqi-airways-resumes-najaf-tehran-flights-after-suspension · https://en.tempo.co/read/2100365/iran-reopens-imam-khomeini-airport-to-international-flights · https://www.iranintl.com/en/202605251140 · https://8am.media/eng/iran-internet-restored-netblocks/ · https://www.pashizi.com/en/currency/usd · https://www.euronews.com/2026/06/30/irans-inflation-spiral-deepens-as-rial-slides-and-tensions-rise
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P2 — top item (platform partner terms / newer online-sales directive), then the Persian RTL version.

## Iteration 6 · 2026-10-17
Task: Re-check exit tax 1405 (fact #23, due) and replace the "guides disagree" wording.
Changed: The whole job chapter's caveat box now gives the 1405 exit-tax amounts (900k / 1.5M / 2.2M tomans by trip number; lower for Hajj/Umrah; flat for Iraq pilgrims), notes they come from the budget bill and some sites still show 1404 tables, tells the Documents officer to have travelers check at payment, and states the receipt is valid to the end of Esfand. Sources linked.
Sources: https://snapp.ir/blog/departure-tax/ · https://www.pateh.com/blog/departure-tax-increase/ · https://www.azki.com/blog/departure-tax/
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: Fact #24 (tax e-invoicing for agencies), then P2 items.

## Iteration 7 · 2026-10-17
Task: Tax e-invoicing for agencies (fact #24, due; P2) with an accountant checklist.
Changed: The whole job chapter has a new box "Tax e-invoices: a checklist for your accountant": what agencies must do, what guides agree on (ticket pattern, ~1 week deadline, service codes), the two disputed points (invoice type; full price vs commission when selling as agent) and five checklist steps ending with the AI Accountant preparing data for human review. Removed the vague one-line note.
Sources: hesabno.com · wallbill.net · yassystem.com · heyvalaw.com (all Persian accounting guides)
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P2 — Persian (RTL) version of the most-used chapters.
