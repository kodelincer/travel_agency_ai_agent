# Travel Agency AI Academy · آکادمی هوش مصنوعی آژانس مسافرتی

**Bilingual: English and Persian.** Use the language button in the header to switch; Persian mode is right-to-left. Every change must be written in both languages (see `CLAUDE.md`).

A self-contained web app that teaches a travel agency owner how to use AI agents (such as Hermes Agent) to run the office better: reservations, hotels, CRM, operations, pilgrimage groups and finance. It is written for agencies worldwide, with a dedicated **Iran-resilient track** for agencies working under sanctions and internet shutdowns.

## Chapters

| # | Chapter | What you learn |
|---|---|---|
| 1 | Start here | How the course works, the two tracks, key numbers |
| 2 | Quick guide · راهنمای سریع | Bilingual summary: the 13 AI roles, the golden approval rule, the first 30 days, questions to ask suppliers and the accountant |
| 3 | Agencies worldwide | Service lines, revenue models, where the industry is heading, McKinsey's four AI scenarios |
| 4 | Iran market 1405 | Licences, charter systems, pilgrimage, the 2026 war and internet shutdown, what that means for AI |
| 5 | The whole job | Every task in an agency by trip stage, including the often-forgotten ones, each mapped to an AI role |
| 6 | Who works in an agency | Every job in an agency (English and Persian titles), which are legally required in Iran, and the AI partner for each |
| 7 | AI agents 101 | Models, tools, memory, skills, channels, guardrails, Hermes Agent |
| 8 | Automation map | 24 jobs across 7 desks, with risk level and "shutdown-proof" flag |
| 9 | AI office of 10 | Ten core AI roles plus three specialists (Trip designer/conductor, Fare watch agent, Controller), how the conductor plans a whole trip, legal fare sources, phases, the owner's phone as control room |
| 10 | The AI-run office | Five-layer blueprint, four ways to connect (API, file export, browser agent, screen control), how to connect reservation, accounting, tax, bank, messaging and web search, autonomy levels, the office server |
| 11 | Try an agent | Live agent simulator with mock CRM, flights, hotels, quotes and a human approval queue |
| 12 | Tool stack | Iran-resilient track (local model, Sepehr/Parto, Bale, SMS) vs global track |
| 13 | Choosing an agent harness · انتخاب هارنس | Hermes Agent, n8n, Dify, OpenClaw, Claude, Goose, LangGraph and the agent SDKs compared (strengths, weaknesses, Iran fit), pick-by-job table, safety rules for any harness |
| 14 | Text, vision and voice · متن، تصویر و صدا | Text-only vs vision vs voice agents, six agency uses (passport photos, transfer receipts, price screenshots, voice notes), local models, step-by-step rollout |
| 15 | Grow revenue | 12 levers and the metric for each |
| 16 | Resilience | Six shocks from 2026 and how to prepare; staying relevant in the AI wave |
| 17 | The future of travel with AI · آینده‌ی سفر | Seven likely trends to 2030 with evidence level, what will not happen soon, a three-horizon plan, skills, signals to watch |
| 18 | Agent-ready website · وب‌سایت آماده برای عامل‌ها | Will website UI disappear; two front doors; 8 building blocks with status (schema.org, API/OpenAPI, MCP, A2A, llms.txt, Web Bot Auth, UCP/AP2/ACP, WebMCP/NLWeb); seven agency tools; code examples; five-step build plan |
| 19 | Products to sell | 10 AI products and services you could build for other agencies |
| 20 | Online business ideas | How Alibaba.ir, Snapptrip and Jabama earn, world trends, 12 online businesses, opening an "Online Desk" |
| 21 | Watch one working day | Interactive time study: log tasks, see where the hours go and which AI role to build first |
| 22 | 90-day plan | Checklist with saved progress |
| 23 | Templates | Persian office playbook, Hermes skill, triage prompt, disruption message, approval policy |
| 24 | Guardrails | Rules before going live, KPIs |
| 25 | Self-review | What earlier versions got wrong and how it was corrected |
| 26 | Glossary · واژه‌نامه | 37 terms (travel trade, Iranian official names, AI) in plain English and Persian, with search |
| 27 | Sources | Every source used, checked October 2026 |

## Use it

- **Open locally:** open `index.html` in any browser. No server or install needed.
- **GitHub Pages:** in the repository settings, open *Pages*, choose *Deploy from a branch*, select this branch and the root folder.
- **Live agent runs:** the simulator in “Try an agent” (chapter 11) calls Claude only when the page is opened as a claude.ai Artifact. Everywhere else, use *Replay a recorded run*.

## Test it

```bash
npm test          # or: python3 build.py && node tests/smoke.cjs
```

The tests open every chapter in a real browser at desktop and phone width, in light and dark mode, with web fonts blocked (as during an internet shutdown) and with browser storage blocked. They also check links, the agent simulator, the one-day worksheet and progress tracking. Install Playwright with `npm install` if it isn't available.

## Improve it with the loop

`loop/PROMPT.md` is a prompt that makes one small, researched and tested improvement per run, then records it:

- `loop/BACKLOG.md`: prioritised improvements (P1–P3)
- `loop/FACTS.md`: every factual claim with source, confidence and a re-check date
- `loop/LOG.md`: one entry per iteration with self-assessment scores

Run it in Claude Code with `/loop Follow loop/PROMPT.md exactly`, or once by pasting the prompt. See the end of `loop/PROMPT.md` for scheduling options.

## Edit it

The source is `src/academy.html` (a page fragment so it can also be published as a claude.ai Artifact). After editing, rebuild the full page:

```bash
python3 build.py
```

## Notes

- All customers, fares and hotels in the simulator are invented demo data.
- Market numbers come from news reports and industry research with different methods; use them as direction, not exact figures.
- Nothing here is legal advice. Check sanctions and Iranian regulations with a lawyer before using any foreign service.
