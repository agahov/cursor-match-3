# Open questions

## Cycle 0 — process defaults (locked 2026-08-29)

Locked from the approved workflow-skeleton plan (process-first, skill + light automation). Change only in a later Reflection.

| ID | Question | Decision |
| --- | --- | --- |
| P1 | Feature IDs? | **Slugs** (`bootstrap-workflow`), not numbers |
| P2 | Task tracking? | **Markdown** in `spec/<slug>/tasks.md` until we outgrow it |
| P3 | Who signs Review? | **Agent fills** `review.md`; **human confirms** |
| P4 | Wiki format? | **Markdown + Mermaid** default; interactive HTML only under `wiki/concepts/<name>/` |
| P5 | When may an agent edit rules/skills? | **Only in Reflection**, or when the user explicitly asks |
| P6 | Gherkin runner? | **Deferred** until the tech-stack **ADR** |

## Cycle 1+ — game and architecture (still open)

| ID | Question | Notes |
| --- | --- | --- |
| G1 | Confirm Match-3 as the game? | Folder name suggests yes; still unconfirmed in wiki |
| G2 | Platform? | web / desktop / mobile |
| G3 | Engine candidates? | After G1–G2 |
| G4 | First playable scope? | Cycle 3 Feature boundary |
| G5 | Art: original vs placeholders? | |
| G6 | Single-player only? | |
| A1 | ADR template (e.g. MADR)? | Cycle 2 |
| A2 | Deterministic game-rule tests vs engine-coupled tests? | After runner **ADR** |
