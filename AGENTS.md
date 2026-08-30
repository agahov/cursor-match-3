# cursor-match3

Workflow kit plus one test game (Match-3). Two layers:

**Method (abstract, reusable — how we work):**

- `process/LOOP.md` — the abstract loop and per-Phase playbooks
- `process/glossary.md` — process terms. `process/conventions.md` — locked P*/S* defaults
- `.cursor/rules/` — short invariants. `.cursor/skills/` — procedures
- `spec/_templates/` — Feature scaffold

**Instance (this project — where we are and what we build):**

- `spec/FOCUS.md` — current Cycle + Phase (live state)
- `spec/ROADMAP.md` — Cycle sequence. Features live in `spec/<slug>/`
- `wiki/` — game design (`index.md`), game terms (`glossary.md`), decisions (`decisions.md`)
- `architecture/` — ADRs, tech stack (`index.md`), open questions (`open-questions.md`)
- `process/reflections/` — Cycle history

A `sessionStart` hook injects `spec/FOCUS.md`. Follow that Phase only.
