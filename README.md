# Travel Agency AI Academy

A self-contained web app that teaches a travel agency owner how to use AI agents (such as Hermes Agent) to run the office better: reservations, hotels, CRM, operations, pilgrimage groups and finance. It is written for agencies worldwide, with a dedicated **Iran-resilient track** for agencies working under sanctions and internet shutdowns.

## Chapters

| # | Chapter | What you learn |
|---|---|---|
| 1 | Start here | How the course works, the two tracks, key numbers |
| 2 | Agencies worldwide | Service lines, revenue models, where the industry is heading, McKinsey's four AI scenarios |
| 3 | Iran market 1405 | Licences, charter systems, pilgrimage, the 2026 war and internet shutdown, what that means for AI |
| 4 | The whole job | Every task in an agency by trip stage, including the often-forgotten ones, each mapped to an AI role |
| 5 | Who works in an agency | Every job in an agency (English and Persian titles), which are legally required in Iran, and the AI partner for each |
| 6 | AI agents 101 | Models, tools, memory, skills, channels, guardrails, Hermes Agent |
| 7 | Automation map | 24 jobs across 7 desks, with risk level and "shutdown-proof" flag |
| 8 | AI office of 10 | Ten core AI roles plus three specialists (Trip designer/conductor, Fare watch agent, Controller), how the conductor plans a whole trip, legal fare sources, phases, the owner's phone as control room |
| 9 | The AI-run office | Five-layer blueprint, four ways to connect (API, file export, browser agent, screen control), how to connect reservation, accounting, tax, bank, messaging and web search, autonomy levels, the office server |
| 10 | Try an agent | Live agent simulator with mock CRM, flights, hotels, quotes and a human approval queue |
| 11 | Tool stack | Iran-resilient track (local model, Sepehr/Parto, Bale, SMS) vs global track |
| 12 | Grow revenue | 12 levers and the metric for each |
| 13 | Resilience | Six shocks from 2026 and how to prepare; staying relevant in the AI wave |
| 14 | Products to sell | 10 AI products and services you could build for other agencies |
| 15 | Online business ideas | How Alibaba.ir, Snapptrip and Jabama earn, world trends, 12 online businesses, opening an "Online Desk" |
| 16 | Watch one working day | Interactive time study: log tasks, see where the hours go and which AI role to build first |
| 17 | 90-day plan | Checklist with saved progress |
| 18 | Templates | Persian office playbook, Hermes skill, triage prompt, disruption message, approval policy |
| 19 | Guardrails | Rules before going live, KPIs |
| 20 | Self-review | What earlier versions got wrong and how it was corrected |
| 21 | Sources | Every source used, checked October 2026 |

## Use it

- **Open locally:** open `index.html` in any browser. No server or install needed.
- **GitHub Pages:** in the repository settings, open *Pages*, choose *Deploy from a branch*, select this branch and the root folder.
- **Live agent runs:** the simulator in “Try an agent” (chapter 10) calls Claude only when the page is opened as a claude.ai Artifact. Everywhere else, use *Replay a recorded run*.

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
