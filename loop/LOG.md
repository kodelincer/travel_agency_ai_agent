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

## Iteration 25 · 2026-10-17
Task: P1 — translate "Resilience" into Persian.
Changed: Chapter text, table headings and the five "resilient against the AI wave" cards bilingual; the six shock rows carry Persian in the SHOCKS array and render with T(). Proofreading caught a wrong Persian month: "late February" 2026 is early Esfand 1404, not late Bahman (war began 28 Feb = 9 Esfand); now "از اوایل اسفند ۱۴۰۴ تا ۵ خرداد ۱۴۰۵" (26 May = 5 Khordad). Facts unchanged (#9–#11 still due 2026-11-15). MAX_TODO 7 → 6.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate Products to sell.

## Iteration 26 · 2026-10-17
Task: P1 — translate "Products to sell" into Persian.
Changed: Chapter text, filters and the "How to choose" callout bilingual (Tern/TravelSmart prices kept as in English). The 10 product cards render with T() from a parallel PRODUCTS_FA array (name, buyer, problem, first version, revenue model, moat); field labels and effort/Iran/abroad pills bilingual. MAX_TODO 6 → 5.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate 90-day plan.

## Iteration 27 · 2026-10-17
Task: P1 — translate "90-day plan" into Persian.
Changed: Chapter text and the reset button bilingual; PLAN now carries Persian phase titles and Persian "what/why" for all 20 items, rendered with T(); the per-phase counter reads "۲ از ۵" in Persian. Item order and the saved tick keys ("phase.item") are unchanged, so existing ticks survive. MAX_TODO 5 → 4.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Templates.

## Iteration 28 · 2026-10-17
Task: P1 — translate "Templates" into Persian.
Changed: Chapter text, all six template titles, hints and the Copy button bilingual. The Hermes skill, the triage prompt and the approval policy now have full Persian versions (JSON keys, the skill's name/description header and output markers stay English because programs read them); the Copy button copies the version in the reader's language. The Python script stays one code block. Tests: the Persian-ratio measure now leaves out pre/code blocks (code is Latin by design); new check that Persian mode shows 6 templates, 5 of them in Persian. MAX_TODO 4 → 3.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P1 — translate Guardrails.

## Iteration 29 · 2026-10-17
Task: P1 — translate "Guardrails" into Persian.
Changed: Whole chapter bilingual: the eight guardrail cards and the six business measures. Review against FACTS.md found the lead stated the low-confidence fact #3 (Skift 2% figure, secondhand citation) as certain; it is now attributed and softened in both languages, as PROMPT.md requires for low-confidence facts. MAX_TODO 3 → 2.
Tests: All checks passed
Scores: correctness 5 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate Self-review.

## Iteration 30 · 2026-10-17
Task: P1 — translate "Self-review" into Persian.
Changed: Whole chapter bilingual: the corrections table and the five "still uncertain" items. Added one correction row in both languages: version 1 was English-only, now the whole app is bilingual with a ratchet test. Persian dates checked: IKA reopening 20 Apr = 31 Farvardin; Iraqi Airways return 8 Oct = 16 Mehr 1405. MAX_TODO 2 → 1.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P1 — translate Sources (the last chapter); then remove the todo machinery check (MAX_TODO 0).

## Iteration 31 · 2026-10-17
Task: P1 — translate "Sources", the last untranslated chapter.
Changed: Heading, lead (with the Persian date range 23–25 Mehr 1405 and a note that most sources are in their original language), group headings and all 72 link labels bilingual; URLs unchanged. Removed the now-stale "untranslated chapters are marked" note from the Persian quick guide. MAX_TODO 1 → 0: the whole app is bilingual. P1 translation item closed in BACKLOG.md.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 5 · clarity 4
Next: P2 — glossary chapter (bilingual), then accessibility pass.

## Iteration 32 · 2026-10-17
Task: P2 — platform partner terms (Alibaba, Snapptrip, Jabama).
Changed: Research in Persian and English found no public commission rates or affiliate programme (alibaba.ir and snapptrip.com were unreachable from here). Instead of guessing, added a bilingual "Ask in writing before you sign" checklist of eight questions (commission base, settlement days, refunds and what happened in 1405, price parity, customer data, ranking, panel/API for agents, exit terms) to the Online business chapter, and made the remaining English-only source label there bilingual. FACTS #45 added (low, absence of evidence); backlog item moved to P3 as an owner task.
Sources: searches listed in FACTS #45
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P2 — newer online-sales directive (Persian search), or glossary chapter.

## Iteration 33 · 2026-10-17
Task: P2 — look for a newer online-sales directive.
Changed: Persian searches found no newer general directive (dated 1394–1397, sources differ) but did find CAO enforcement: three agencies suspended for a month in Mordad 1403 for Arbaeen overpricing, another in Mordad 1404 that also lost its online-sales permit, and the 1405 circulars limiting sales channels. Added this to the Iran chapter (both languages), sharpened the "before an AI agent sells online" checklist (give the agent official fare caps as a hard rule), updated the Self-review uncertainty item, and made the chapter's source labels bilingual. FACTS #46–47 added; backlog item moved to P3 for the owner to ask the association.
Sources: FACTS #46–47
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P2 — exit-permission facts, or glossary chapter.

## Iteration 34 · 2026-10-17
Task: P2 — exit-permission facts.
Changed: "The whole job" now has a bilingual exit-permission checklist inside "Check these with the source": conscription-age men (Sakha system, bail, the Arbaeen 1405 no-bail window, absentees), unmarried under-18s (guardian consent, Passport Law art. 18), married women (husband's written consent art. 18 para 3, prosecutor in emergencies, art. 19 objection, reported bill), plus how the Documents officer agent handles it (one neutral question, record, remind before ticketing, never judge). Framed as a staff checklist, not legal advice. Source labels in that chapter made bilingual. FACTS #48–49.
Sources: FACTS #48–49
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: P2 — glossary chapter (bilingual).

## Iteration 35 · 2026-10-17
Task: P2 — export the one-day log as a CSV file.
Changed: "Download as CSV (Excel)" button on the worksheet, bilingual. The CSV uses the reader's language for headers and values, escapes commas/quotes/newlines, and starts with a byte-order mark so Excel shows Persian correctly. On claude.ai it uses the `downloads` capability (viewer confirms; declined, busy and unavailable each get a bilingual message, and the button hides when downloads are unavailable); on GitHub Pages or a local file it is a normal browser download. Artifact now declares `sample` and `downloads`. New test: the download contains the header, the BOM and the new task.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
Next: P2 — glossary chapter (bilingual).

## Iteration 36 · 2026-10-17
Task: P2 — glossary chapter.
Changed: New bilingual chapter "Glossary · واژه‌نامه" (before Sources): 37 terms in three groups (travel trade, Iran official, AI), each with the term in both languages and one plain sentence in each; search box that matches English or Persian (ignores ZWNJ and Arabic ي/ك variants), group filters, and a bilingual "no match" message. Every definition restates facts already in FACTS.md (licences, Samah, Sakha, exit tax, Hermes 64k context). README table and MIN_CHAPTERS (22 → 23) updated. New test: search finds "charter" and "سماح" and reports no match for nonsense.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 5
Next: P2 — accessibility pass.

## Iteration 37 · 2026-10-17
Task: P2 — accessibility pass with an automated check.
Changed: Audit (both themes × both languages, all 23 chapters) found every control labelled and every button named, but 10 chapters skipped from h2 to h4 and two light-theme colours failed WCAG AA: the chapter eyebrow (amber 3.34:1) and green pills (4.34:1). Fixes: light --amber #B97800 → #946000 (4.9:1) and --ok #17804F → #147547 (5.0:1); all 81 h4 headings (73 static, 8 script-built) became h3 with a .h4 class that keeps the same look, so headings go h1 → h2 → h3 with no skips. Focus ring (:focus-visible) was already present. New test block "accessibility": labels, button names, heading order and text contrast (4.5:1, 3:1 for large text) in light/dark × en/fa; it fails on the previous version and passes now.
Tests: All checks passed
Scores: correctness 5 · usefulness 3 · robustness 5 · clarity 4
Next: P2 — role playbooks (Hermes skill file per AI role), the last P2 item.

## Iteration 38 · 2026-10-17
Task: P2 — role playbooks (a Hermes skill file per AI role).
Changed: Templates chapter has a new "Role playbooks" block: pick any of the 13 roles and get a ready SKILL.md, generated from the same role data as "AI office of 10" (mission, duties, schedule, access, the role's own approval rule, KPI) plus fixed office rules for every role (human approval for any payment/issue/refund/hold/contract; no invented prices; no card numbers; no data outside office systems; no guessing visa rules; output = draft + internal note + action log). Written in the reader's language with Persian numbering; the name/description header stays English. Copy and "Download .md" (downloads capability on claude.ai, normal download elsewhere). Tests: 13 roles, accountant file has its approval rules and downloads as accountant-SKILL.md; Persian mode shows Persian headings.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4
Next: backlog has no P1/P2 left; focus rotation (iteration 39 → robustness).

## Iteration 39 · 2026-10-17
Task: Focus rotation (39 mod 6 = 3, robustness) — survive corrupted saved data.
Changed: A probe with 11 kinds of bad localStorage values found two crashes that left the page with no navigation: "taa.done" holding a number or object, and worksheet rows that were null, too short or named a role that no longer exists. Fix: store.list() keeps only a list of strings for progress and plan ticks; worksheet rows are validated and repaired on load (unknown role or missing task dropped; minutes forced to 1–600; "annoying" must be true; optional Persian task kept). No user-visible text changed. New test "corrupted storage" (fails on the old code with "number 5 is not iterable", passes now).
Tests: All checks passed
Scores: correctness 5 · usefulness 4 · robustness 5 · clarity 4
Next: stop check — backlog has no P1/P2, no fact due before 2026-11-15; iterations 37–39 do not all score 4+ (37 usefulness 3), so one more focus-rotation iteration (40 mod 6 = 4: new tests for untested behaviour).

## Iteration 40 · 2026-10-17
Task: Focus rotation (40 mod 6 = 4) — tests for untested behaviour.
Changed: New test block "saved state and controls": previous/next buttons move one chapter and are disabled at the ends; automation-map risk and desk filters combine; product filters narrow the list; language, current chapter, 90-day plan ticks and worksheet rows (including a removed row) survive a reload; "Clear my ticks" empties the plan. All passed on first run, so no defect was found; they now guard the owner's saved work against regressions.
Tests: All checks passed
Scores: correctness 5 · usefulness 4 · robustness 5 · clarity 4
Next: steady state (see below).

## Steady state · 2026-10-17
Stop conditions in PROMPT.md are met: the backlog has no P1 or P2 items; no fact in FACTS.md is due (earliest re-check 2026-11-15 for facts #9–#11: flights, internet, rial and inflation); iterations 38, 39 and 40 each scored 4 or more on every line. The loop stops here.
State: 23 chapters, all bilingual (English/Persian, RTL), 49 sourced facts, automated checks for layout, themes, both languages, accessibility (WCAG AA contrast, labels, headings), storage blocked or corrupted, saved state, downloads and the simulator.
Restart: run `/loop Follow loop/PROMPT.md exactly` on or after 2026-11-15 to re-check facts #9–#11, or sooner when the owner returns answers for the P3 items (platform terms, the association's directive, an integrator sandbox).

## Owner request · 2026-10-18 — three new chapters
Task: The owner asked for (1) a comparison of the best harnesses/agents to run the office, with pros and cons; (2) when an agent should be text-only, vision or voice, and how to use each in travel; (3) where travel is heading with AI and how to prepare.
Changed: Three bilingual chapters. "Choosing an agent harness" (after Tool stack): model vs harness, the owner's short answer, 8 filterable cards (Hermes Agent, n8n, Dify, OpenClaw, Claude, Goose, LangGraph, agent SDKs) with best use, licence/cost, strengths, weaknesses and Iran fit; a pick-by-job table; safety rules for any harness. "Text, vision and voice": capability table, six agency uses (passport photo with MRZ check, transfer-receipt screenshots that only count after the bank statement, competitor screenshots, voice notes, call notes, group voice updates), six-step rollout, hardware note. "The future of travel with AI" (after Resilience): seven trends with evidence labels, what will not happen soon, a three-horizon plan, people and skills, signals to watch. README table (26 chapters), MIN_CHAPTERS 23 → 26, FACTS #50–60, new test for harness cards and filters. Persian dates checked (27 Aug 2026 = 5 Shahrivar 1405; ambiguous month conversions replaced by Gregorian).
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-18 — agent-ready website chapter
Task: The owner asked whether website UIs will change or disappear because agents need direct access, and what to build (methods, standards, tools) so agents can use the agency's service without browsing it visually.
Changed: New bilingual chapter "Agent-ready website" (after "The future of travel with AI"): honest answer (UI shrinks for simple bookings but does not disappear; two front doors to one back office, labelled as our judgement); eight building blocks with status pills (structured data, OpenAPI API, MCP server, A2A agent card, llms.txt, agent identity/control with Web Bot Auth, agent payments UCP/AP2/ACP as watch-only and unusable for rials, WebMCP/NLWeb experimental); seven agency tools with rules (holds behind partner keys, idempotency key and human approval); JSON-LD and MCP tool examples (invented data, IRR currency note); five-step build plan with tools; unchanged rules (licence, approval, private data, host inside Iran). README (27 chapters), MIN_CHAPTERS 26 → 27, FACTS #61–63. Review caught an unrealistic example price (18.5M rials) and changed it to 185M rials.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-18 — AI office toolbox chapter
Task: The owner asked for a section listing the tools and skills an agency needs to automate most work with AI agents, saying which to build, buy, download or curate, with explanations and references.
Changed: New bilingual chapter "AI office toolbox" (after "Text, vision and voice"): 31 items in 8 groups (infrastructure, models, harness, channels, business systems, agent hands and document tools, safety and monitoring, agent skills), each with a download/buy/build/curate label, what it is, its use in the office, a caution and a reference link; filters by how you get it; a three-month starter kit; a staff-skills table; a pre-download checklist. README (28 chapters), MIN_CHAPTERS 27 → 28, FACTS #64–66, new toolbox test.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-18 — reality check chapter
Task: The owner asked whether the academy is too much fantasy and not practical, and for all the challenges they would face; then asked to add the honest answer to the app.
Changed: New bilingual chapter "Reality check" right after "Start here": three columns (practical now / possible with work / still a plan, including that "13 agents" is a way to organise work, not 13 running agents); limits of the academy itself (chain not tested end to end, secondary sources, no cost/ROI figures, forecasts); 12 challenges with what happens and how to reduce each (integrator access, Persian quality of local models, hardware in Iran, technical skills, cost vs benefit, people, channels, legal, security, money mistakes, fast-changing tools, crisis); a four-step realistic start with go/no-go conditions; the three answers that decide whether the big plan is possible. Start here now points to it. README (29 chapters), MIN_CHAPTERS 28 → 29.
Tests: All checks passed
Scores: correctness 5 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-18 — hands-on setup chapter
Task: The owner asked for a chapter teaching how to install Hermes, build a team of agents with profiles and bots, whether a bot group chat is needed, how to run Multica (tasks for agents and staff) and Honcho memory on an office server or PC, intranet and outside access, daily agent routines, and anything else needed to pull the office together; then added: a VPS with an LLM provider such as AvalAI, access from outside the office and monitoring of agents' tasks and logs; pictures and real tasks for the board; and how Slack would fit, how it differs from Multica, and whether they work together.
Changed: New bilingual chapter "Hands-on setup" (after the toolbox): route A (office server + Ollama) vs route B (Iranian-data-centre VPS + AvalAI behind LiteLLM, with local fallback), inline SVG architecture diagram (bilingual, both themes), four-profile team table, group-chat answer, Telegram vs Bale, 12 install steps with commands from official docs, three ways to give work, a sample Multica board with 16 real tasks (filters, CSV download), Slack/Mattermost/messenger group/Multica comparison with each tool's mission and a joint workflow, monitoring table, consolidation cards, honest limits. Review fixes: a class-name clash with the departure-board style failed contrast (renamed); diagram labels flipped in RTL (diagram forced LTR, Persian labels RTL). README (30 chapters), MIN_CHAPTERS 29 → 30, FACTS #67–71, new setup test.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-18 — Multica runtimes, Desktop app, fully local, Claude Code as runtime
Task: Add the useful points from the chat answers about Multica and Claude Code to the app.
Changed: Hands-on setup step "9b" (bilingual): how a task runs (runtime machine with agent programs and daemon; server only coordinates; assign → daemon runs the agent → comments → review), VPS as the main runtime and PCs only for PC-only needs, the daemon commands for a self-hosted server, web app vs Desktop app (Desktop may connect only to Multica's cloud); a "fully local, nothing on Multica's cloud" checklist; a global-track-only note on Claude Code as a runtime (supported-country and personal-plan rules first; Haiku default, API key precedence, shared limits, keep login on the Mac). FACTS #72–73.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4

## Owner request · 2026-10-21 — migration roadmap, AI accountant, customer website, licences
Task: The owner asked for a detailed roadmap to move the office to agents little by little, how an agent could replace the accountant, a customer website with hotels, flights and agent-written articles, more practical ideas in those three areas, consistency updates across the academy, and a chapter on which licences the office and its manager need (Iran and Iranian airlines vs international).
Changed: Four bilingual chapters. "Licences and permits" (after Iran market 1405): 11-activity map with issuer, scope and an official/check label per row, office requirements, technical-manager conditions, Iran vs international summary, three example trips, what agents change. "Customer website and content agent" (after Agent-ready website): three build routes with a recommendation, pages, five-step content flow with a WordPress Contributor account, rules for AI articles, article types, season calendar, build steps, measures, six ideas. "Migration roadmap" and "The AI accountant" (Act group): four stages with a gate, six phases over twelve months, each person's new role and fair treatment, weekly rituals, measures; 18 accounting tasks with levels, build steps, rhythm, three ways to keep a human accountant, six-month plan, ideas. Consistency: links from Start here, 90-day plan, AI office of 10, the tax checklist, Iran market and Agent-ready website; a `content` profile row in Hands-on setup; a Self-review row; 6 glossary terms. README (34 chapters), MIN_CHAPTERS 30 → 34, FACTS #74–85, new test (table sizes, a label on every row, every in-app link lands on a real chapter). Honesty: the accountant chapter says plainly the agent carries no legal responsibility; licence rows from blogs are marked "check"; BSP status and guarantee amount stay unverified; page bodies could not be opened from this container, so licence facts come from search excerpts.
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-21 — website spec for the office, compatible with AI agents
Task: The owner asked whether the website chapter covers their own office and the services it can offer, and asked for an agent-compatible solution in the site spec.
Changed: "Customer website and content agent" gains a website spec: 12 office services (page path, what the customer does, licence behind it, agent tools), 12 agent-compatible parts with a launch phase each (JSON-LD types, one source of truth, plain policies page, sitemap with hreflang, robots.txt incl. a separate decision on AI-training crawlers, llms.txt, tours feed, OpenAPI with the seven Agent-ready tools plus request_quote, MCP server, approvals built in, keys/limits/logs, A2A agent card), a five-step "how a customer's assistant books with you" flow ending in human approval, and a download of a bilingual Markdown brief for the developer. Code elements now always run left to right, so paths no longer flip in Persian mode. README row, new test (12 + 12 rows, phase on each, brief contains both languages and the agent files).
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-21 — unified agency platform demo (accounting + daily tasks, agent-ready)
Task: The owner wants accounting software for Iranian travel agencies that brings every daily office task into one system usable by all agencies, ready for AI agents, shown in red and blue in the menu, with the academy upgraded using practical agency knowledge. Owner chose: working demo inside the academy, data in each browser.
Changed: New bilingual chapter "Unified agency platform (demo)" (Act group, after The AI accountant), its menu item highlighted (red border, blue text; ★ in the phone picker) and a red-and-blue callout on Start here and Products to sell. Demo: dashboard with eight figures and expert alerts (ticketing deadline, passport under six months after travel, unpaid travellers about to depart, departures, e-invoice not sent, low supplier credit, cheques due), bookings (draft → confirm, cancel with supplier penalty and agency fee, e-invoice status), receipts by transfer/cash/cheque with cheque clearing, supplier top-ups, refunds, customers/partners/companies and supplier balances, double-entry ledger (net method) with trial balance and CSV, approvals queue, tasks, 14 agent tools (6 need approval) with a JSON console and a tool-definition download; Persian dates shown under date fields; saved data validated and reset if corrupted. Explainers: posting rules, a 15-area feature map written from the counter, why one platform and how it could earn (check existing Iranian vendors first), steps from demo to real software. Upgrades elsewhere: Migration roadmap gains "no go-live before a peak" and "one system under it all"; The AI accountant gains charter seat blocks and insurance/visa/service-fee income (20 tasks); Licences renewal calendar adds the monthly tour reports. README (35 chapters), MIN_CHAPTERS 34 → 35, new tests (highlighted menu, draft → confirm, agent payment waits then posts, ledger balanced, 14 tool definitions, recovery from corrupted data).
Tests: All checks passed
Scores: correctness 4 · usefulness 5 · robustness 4 · clarity 4

## Owner request · 2026-10-24 — crypto, USDT and wallets
Task: The owner asked for a section on crypto such as Tether and wallets, how customers could pay in crypto or charge their account on the site, ideas, and tax and system behaviour in Iran and internationally.
Changed: New bilingual chapter "Crypto and USDT" (Grow & protect, after Online business ideas). Honest advice first: build crypto-ready but keep it switched off, because of central-bank caps (5,000 USDT purchase, USD 10,000 wallet, per news), US sanctions on the four largest Iranian exchanges (2 June 2026) and Tether freezes (about USD 550M), and the 1404 speculation-tax law. Words staff need; six payment ways with Iran/abroad status and a verdict (account top-ups rejected, booking deposit offered instead); Iran vs international table with News / Check / Our reading labels; platform behaviour if ever allowed (quote and rate lock, address per booking, screening, ledger entries, people hold keys, stop switch); eight-question readiness gate saved in the browser; quote calculator with rate risk; six ideas needing no crypto; four steps with gates. No sanctions-circumvention advice, stated in the chapter. Also: licence-map row (12 activities), a Guardrails card, pointer from Agent-ready website, 3 glossary terms (46), new Sources group. README (36 chapters), MIN_CHAPTERS 35 → 36, FACTS #92–96, new test (6 ways, 9 rules rows, gate off until all 8 and kept after reload, calculator 1,011 USDT). Limits: no official text could be opened; tax details differ between sources; VAT treatment is our reading only.
Tests: All checks passed
Scores: correctness 4 · usefulness 4 · robustness 4 · clarity 4
