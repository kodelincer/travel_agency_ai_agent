# Project rules: Travel Agency AI Academy

## Bilingual rule (required by the owner, applies to every change)

The app is **bilingual: English and Persian (فارسی)**. Everything a reader can see must exist in both languages:

- Every new or changed text (chapters, headings, paragraphs, table cells, buttons, labels, notes, placeholders, status messages, data arrays rendered by the script) is written in English **and** Persian in the same change.
- Static text: put both versions side by side using the classes `l-en` and `l-fa` (for example `<span class="l-en">…</span><span class="l-fa">…</span>`, or `<div class="l-en">…</div><div class="l-fa">…</div>` for blocks). The language switch shows one and hides the other with CSS.
- Text built by the script: use the `T(en, fa)` helper, which returns a node holding both versions.
- Persian must read naturally (not word-for-word), use Persian digits only where staff would, and keep official Persian terms (بند الف، سامانه مودیان، سماح …).
- A chapter that is not yet translated carries `data-fa="todo"` on its `<section>`. Persian readers then see the English text with a notice. The list of `todo` chapters may only shrink; new chapters may never be added as `todo`.
- `tests/smoke.cjs` checks the switch, right-to-left layout in Persian mode, and that translated chapters really contain Persian text.

## Other rules

- Source is `src/academy.html`; run `python3 build.py` after editing; never edit `index.html` by hand.
- Run `npm test` (or `node tests/smoke.cjs`) before every commit; all checks must pass.
- Follow `loop/PROMPT.md` for improvement iterations; keep `loop/FACTS.md`, `loop/BACKLOG.md` and `loop/LOG.md` up to date.
- Customer data in examples is always invented. Money, ticketing and booking actions always stay behind human approval in every design the app teaches.
