# Reflection: cycle 1 process (mid-cycle)

Does **not** close cycle 1. Game design (G2–G6) is still Research. User asked to read `OPEN_QUESTIONS.md` and run Reflection on the structure findings.

## What worked

- Splitting process vs game glossaries.
- Treating Match-3 as a fixture for the workflow, not the product.

## What was painful

- `reflect-cycle` always advanced the Cycle, so a process-only Reflection would have skipped game design.
- S1–S7 sat in `OPEN_QUESTIONS.md` with no Phase that applied them.
- `AGENTS.md` and `project-map.mdc` both carried the folder map.

## Concrete edits (applied)

1. [`spec/_templates/feature/tasks.md`](../../spec/_templates/feature/tasks.md) — restore Gherkin walkthrough (S1).
2. [`process/glossary.md`](../glossary.md) — closed Feature `tasks.md` / `review.md` are records (S2).
3. [`.cursor/rules/project-map.mdc`](../../.cursor/rules/project-map.mdc) — invariants only; map stays in `AGENTS.md` (S3).
4. [`spec/ROADMAP.md`](../../spec/ROADMAP.md) — live Cycle is `LOOP.md`; drop the dead cycle-0 gate (S4).
5. [`.gitignore`](../../.gitignore) — ignore junk before cycle 2 artifacts (S6).
6. [`AGENTS.md`](../../AGENTS.md) — entry-file convention (S7); this repo is the kit plus one test game (G1).
7. [`.cursor/skills/reflect-cycle/SKILL.md`](../../.cursor/skills/reflect-cycle/SKILL.md) and [`phases.md`](../phases.md) — mid-cycle process Reflection does not advance the Cycle.
8. [`OPEN_QUESTIONS.md`](../OPEN_QUESTIONS.md) — lock S1–S7 and G1.

## Not applied

- S5: Cursor Automation still only a draft. Create when the user asks, not in this Reflection.

## Deferred

G2–G6 (platform, engine, first playable, art, single-player) and A1–A2 stay for cycle 1–2. Cycle stays 1, Phase **research**.
