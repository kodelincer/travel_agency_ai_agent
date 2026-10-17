# Travel Agency AI Academy

A self-contained web app that teaches a travel agency owner how to use AI agents (such as Hermes Agent) to run the office better: reservations, hotels, CRM, operations, pilgrimage groups and finance. It is written for agencies worldwide, with a dedicated **Iran-resilient track** for agencies working under sanctions and internet shutdowns.

## Chapters

| # | Chapter | What you learn |
|---|---|---|
| 1 | Start here | How the course works, the two tracks, key numbers |
| 2 | Agencies worldwide | Service lines, revenue models, where the industry is heading, McKinsey's four AI scenarios |
| 3 | Iran market 1405 | Licences, charter systems, pilgrimage, the 2026 war and internet shutdown, what that means for AI |
| 4 | AI agents 101 | Models, tools, memory, skills, channels, guardrails, Hermes Agent |
| 5 | Automation map | 24 jobs across 7 desks, with risk level and "shutdown-proof" flag |
| 6 | Try an agent | Live agent simulator with mock CRM, flights, hotels, quotes and a human approval queue |
| 7 | Tool stack | Iran-resilient track (local model, Sepehr/Parto, Bale, SMS) vs global track |
| 8 | Grow revenue | 12 levers and the metric for each |
| 9 | Resilience | Six shocks from 2026 and how to prepare; staying relevant in the AI wave |
| 10 | Products to sell | 10 AI products and services you could build for other agencies |
| 11 | 90-day plan | Checklist with saved progress |
| 12 | Templates | Persian office playbook, Hermes skill, triage prompt, disruption message, approval policy |
| 13 | Guardrails | Rules before going live, KPIs |
| 14 | Self-review | What the first version got wrong and how it was corrected |
| 15 | Sources | Every source used, checked October 2026 |

## Use it

- **Open locally:** open `index.html` in any browser. No server or install needed.
- **GitHub Pages:** in the repository settings, open *Pages*, choose *Deploy from a branch*, select this branch and the root folder.
- **Live agent runs:** the simulator in chapter 6 calls Claude only when the page is opened as a claude.ai Artifact. Everywhere else, use *Replay a recorded run*.

## Edit it

The source is `src/academy.html` (a page fragment so it can also be published as a claude.ai Artifact). After editing, rebuild the full page:

```bash
python3 build.py
```

## Notes

- All customers, fares and hotels in the simulator are invented demo data.
- Market numbers come from news reports and industry research with different methods; use them as direction, not exact figures.
- Nothing here is legal advice. Check sanctions and Iranian regulations with a lawyer before using any foreign service.
