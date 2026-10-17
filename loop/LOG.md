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

## Iteration 8 · 2026-10-17 (requested by the owner)
Task: Map every job in an agency (incl. accountant and auditor) to AI agents; add an orchestrating trip designer and a multi-source fare watch agent.
Changed: New chapter "Who works in an agency" (16 jobs with English and Persian titles, legally required technical managers, auditor, tour leader, AI partner per job). AI office chapter: three specialist roles (Trip designer/conductor, Fare watch agent, Controller/pre-audit), a 6-step orchestration flow with a "check the joins" step, and a fare-source table (web services recommended; airline panels/GDS/foreign airlines only via licensed access; no scraping of public sites). Fixed step grids that ignored phone layout (inline styles overrode the media query). README and tests updated (20 chapters, team table, 13 roles).
Sources: arasbaran.org · alaedin.travel · organimi.com · Amazon Bedrock / Mastra multi-agent docs · Proskauer and Vercara on fare scraping
Tests: All checks passed (new: team table and roles)
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: Owner request — AI-run office architecture: connecting agents to reservation software, web search and accounting software.

## Iteration 9 · 2026-10-17 (requested by the owner)
Task: Blueprint for an office mostly run by AI agents, connected to reservation software, web search and accounting software.
Changed: New chapter "The AI-run office": five layers (people, channels, brain, shared memory, connectors), four connection methods ranked by reliability (API, file export, browser agent, screen control in a VM), a table connecting each system (reservation web services, airline/hotel panels, desktop and online accounting, tax e-invoices, bank, CRM, messengers, web search, office files) to agents with fallbacks, four autonomy levels with office examples, and an office-server spec. README and tests updated (21 chapters).
Sources: sepehrcc.com · p30web.org · hsaco.net · enterprisedna.co (Xero, Odoo MCP) · truto.one · turingpost.com · fast.io
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P2 — Persian (RTL) version of the most-used chapters.

## Iteration 10 · 2026-10-17 (requested by the owner: "is everything in the app?")
Task: Audit every owner request and every research finding against the app; add what was missing.
Changed: Audit found all requests covered but eight findings missing. Added: revenue numbers ($150B ancillaries, 78% first-reply survey, insurance commission) under Grow revenue; three trend cards ($1T online, young-traveler trends, AI-native startup funding) and platform host notes in Online business ideas; Travelport/Sabre/Expedia MCP specifics and messenger interoperability + security caveat in Tool stack; "Five questions to answer about her office" in Watch one working day; a self-review row. Still open by design (backlog): Persian RTL version, official exit-permission procedure, platform partner terms.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P2 — Persian (RTL) version.

## Iteration 11 · 2026-10-17
Task: Persian (RTL) version, part 1 (P2): a Persian quick-guide chapter.
Changed: New chapter "راهنمای سریع فارسی" right after Start here (lang="fa", dir="rtl"): golden approval rule, table of all 13 AI roles with Persian titles, main work and what needs the owner's approval, the first 30 days, and questions to ask the web-service provider, the accountant and the association. RTL styles (Vazirmatn, right-aligned tables, mirrored callout border, phone-width table). README and tests updated (22 chapters; new RTL test checks direction, language, alignment and 13 rows). Checked on a phone in dark mode.
Tests: All checks passed (new: Persian chapter is RTL)
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P2 — glossary chapter (or Persian part 2).

## Iteration 12 · 2026-10-17 (owner rule: everything in English and Persian)
Task: Make the app bilingual with a language switch; record the rule so every future change follows it.
Changed: CLAUDE.md (new) and loop/PROMPT.md now require every visible text in both languages. Header language button; Persian mode sets lang=fa and dir=rtl (menu on the right, Vazirmatn font, Persian chapter numbers and titles, Persian group names, bilingual footer and chapter buttons). CSS converted to logical properties so layouts mirror correctly. `T(en, fa)` helper for script-built text and `l-en`/`l-fa` classes for static text. Start and Quick guide fully bilingual; 20 chapters marked data-fa="todo" show a Persian notice and English text until translated. Tests: switch, RTL, Persian titles for all chapters, real Persian text in translated chapters, no overflow in Persian mode, switching back, and a MAX_TODO ratchet (20).
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 5 · clarity 4
Next: P1 — translate The whole job and Who works in an agency.

## Iteration 13 · 2026-10-17
Task: P1 — translate "The whole job" and "Who works in an agency" into Persian.
Changed: Both chapters fully bilingual: headings, leads, filter chips, callouts (tax e-invoice checklist, exit tax, jobs only a person can hold) and all script data (7 stages / 44 tasks, 16 jobs) with Persian text; role names shown in the active language. MAX_TODO lowered 20 → 18.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate the AI office chapter (13 roles with duties, orchestration, fare watch, control room).

## Iteration 14 · 2026-10-17
Task: P1 — translate the AI office chapter into Persian.
Changed: Persian data for all 13 roles (mission, duties, timing, needs, approvals, measure) via ROLES_FA; role cards, phase pills, lifecycle steps and labels render in the active language. Static parts bilingual: lead, "like 10 people" callout, team intro, phase filters, orchestration steps, conductor callout, fare-source table, fare-watch duties, the Office group example (English and Persian versions), build guide. MAX_TODO 18 → 17.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate The AI-run office and Watch one working day.

## Iteration 15 · 2026-10-17
Task: P1 — translate "The AI-run office" into Persian.
Changed: Whole chapter bilingual: five layers, four connection methods, the per-system connection table (10 systems), autonomy levels, office-server spec, source notes. MAX_TODO 17 → 16.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Watch one working day (worksheet labels and data).

## Iteration 16 · 2026-10-17
Task: P1 — translate "Watch one working day" (interactive worksheet).
Changed: Chapter fully bilingual: lead, form labels, buttons, five questions, table headers; summary stats, time bars, advice, badge and copied summary in the active language; 17 systems and 12 example tasks with Persian names. New `langHooks` list re-fills drop-down options and the placeholder on every language switch (options cannot hold two languages). User-typed tasks stay as typed. New test: drop-downs and placeholder switch to Persian. MAX_TODO 16 → 15.
Bug caught by tests: my block replacement ended at the first "renderDay();" (inside a click handler), leaving old code behind and breaking the whole script. Fixed; lesson: always cut code blocks at a unique end marker.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Online business ideas.

## Iteration 17 · 2026-10-17
Task: P1 — translate "Online business ideas" into Persian.
Changed: Whole chapter bilingual: platform table, confirmed facts about Alibaba, seven world-trend cards, filters, Online Desk plan and measures; 12 idea cards with Persian name, earnings, first step, time and AI help (IDEAS_FA), bilingual group, cost and status pills. Proofreading fixed a mangled "Trip.com" and an ambiguous Persian month for March 2026. MAX_TODO 15 → 14.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Tool stack.

## Iteration 18 · 2026-10-17
Task: P1 — translate "Tool stack" into Persian.
Changed: Whole chapter bilingual: both tracks (12 cards), messenger interoperability and security note, the 14 integrator questions (separate Persian list), the one-afternoon model test (steps, 7-row scoring sheet, totals), and the AI-gateway warning. Commands and URLs stay in code form in both languages. MAX_TODO 14 → 13.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Iran market 1405.

## Iteration 19 · 2026-10-17
Task: P1 — translate "Iran market 1405" into Persian.
Changed: Whole chapter bilingual: licences (بند الف / بند ب), online-sales rules and the "before an AI agent sells for you online" checklist, market structure, the 2026 timeline with Persian dates, key numbers, "what this means for AI" and the legal note. MAX_TODO 13 → 12.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Agencies worldwide.

## Iteration 20 · 2026-10-17
Task: P1 — translate "Agencies worldwide" into Persian.
Changed: Whole chapter bilingual: the 10-row service-line table (with Persian pills), industry direction, the three trend cards (IDC, USTOA/Fora, Skift–McKinsey), McKinsey's four scenarios and the owner's lesson. Proofreading removed a Persian month that would have been ambiguous for "July 2026". MAX_TODO 12 → 11.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate AI agents 101.

## Iteration 21 · 2026-10-17
Task: P1 — translate "AI agents 101" into Persian.
Changed: Whole chapter bilingual: chatbot vs automation vs agent, the junior-clerk analogy, the five-step agent loop, the eight building blocks table and the Hermes Agent paragraph. Product names, file names and MCP stay in Latin script in both languages. MAX_TODO 11 → 10.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate Automation map.

## Iteration 22 · 2026-10-17
Task: P1 — translate "Automation map" into Persian.
Changed: Chapter text and risk filters bilingual; all 24 job cards rendered with T() from a parallel CASES_FA array (title, description, agent does, you do), Persian desk names (DESK_FA) for the kicker and desk filters, bilingual risk and shutdown-proof pills. New test: in Persian mode the map shows 24 cards with Persian titles and no desk filter or card text without Persian (fails on the old code, passes now). MAX_TODO 10 → 9.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 5 · clarity 4
Next: P1 — translate Try an agent (simulator).

## Iteration 23 · 2026-10-17
Task: P1 — translate "Try an agent" (simulator) into Persian.
Changed: Chapter text, labels, buttons, placeholders, office facts and "What to notice" bilingual. Script: every status and error message goes through say(en, fa); call counter, log heading, inbox senders, approval ticket (labels, buttons, approved/rejected notes) use T(); the speed drop-down re-renders through langHooks. The recorded run writes its internal note in the reader's language, and the live prompt asks for the internal note in the page language. Tool names and JSON in the log stay technical. New test: in Persian mode the drop-down, status and replay internal note are Persian (fails on the old code). MAX_TODO 9 → 8.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 5 · clarity 4
Next: P1 — translate Grow revenue.

## Iteration 24 · 2026-10-17
Task: P1 — translate "Grow revenue" into Persian.
Changed: Chapter text, the three stats (with their caveats kept: "vendor-reported", "sources vary") and the sources label bilingual; the 12 lever cards now carry Persian kicker, title, explanation and metric in the LEVERS array and render with T(). MAX_TODO 8 → 7.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate Resilience.
