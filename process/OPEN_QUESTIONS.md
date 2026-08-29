# Open questions

## Locked process defaults

Change only in a later Reflection.

| ID | Question | Decision |
| --- | --- | --- |
| P1 | Feature IDs? | **Slugs**, not numbers |
| P2 | Task tracking? | **Markdown** in `spec/<slug>/tasks.md` until we outgrow it |
| P3 | Who signs Review? | **Agent fills** `review.md`; **human confirms** |
| P4 | Wiki format? | **Markdown + Mermaid** default; interactive HTML only under `wiki/concepts/<name>/` |
| P5 | When may an agent edit rules/skills? | **Only in Reflection**, or when the user explicitly asks |
| P6 | Gherkin runner? | **Deferred** until the tech-stack **ADR** |

| G1 | What game is in this repo? | **Match-3** as the fixture to test the workflow, not as the product. |
| S1 | Tasks template walkthrough? | Restored in `spec/_templates/feature/tasks.md` |
| S2 | Closed Feature tasks/review? | **Records** at close. Do not rewrite for later process changes. |
| S3 | `AGENTS.md` vs `project-map.mdc`? | Map in `AGENTS.md`. Rule holds invariants only. |
| S4 | Roadmap vs `LOOP.md`? | Roadmap is the sequence. **Live Cycle is `LOOP.md`.** |
| S5 | Cursor Automation? | Draft only. Create when the user asks. |
| S6 | `.gitignore`? | Added (OS, env, common build dirs). |
| S7 | Entry file names? | `wiki/index.md`, `architecture/index.md`, `spec/ROADMAP.md`, `process/LOOP.md`. |

## Still open (cycle 1–2)

| ID | Question | Notes |
| --- | --- | --- |
| G2 | Platform? | web / desktop / mobile |
| G3 | Engine candidates? | After G2 |
| G4 | First playable scope? | Cycle 3 Feature boundary |
| G5 | Art: original vs placeholders? | |
| G6 | Single-player only? | |
| A1 | ADR template (e.g. MADR)? | Cycle 2 |
| A2 | Deterministic game-rule tests vs engine-coupled tests? | After runner **ADR** |
