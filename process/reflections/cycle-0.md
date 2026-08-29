# Reflection: cycle 0

## What worked

- Four roots (wiki / architecture / spec / process) plus rules vs skills vs documented loop is easy to follow.
- Dogfooding `bootstrap-workflow` as a Feature forced Gherkin, Tasks, Review, and Reflection to exist on day one.
- Locking P1–P6 from the approved plan unblocked Reflection without inventing a stack.

## What was painful or ambiguous

- Cycle 0 had to create folders before Gherkin could live on disk. That exception must not leak into later Features.
- P3 says the human confirms Review before Reflection. Completing both in one implement pass needed an explicit-ask escape hatch; the skill text did not say that until this Reflection.
- “Tests pass” is a walkthrough until a runner **ADR**. Easy to forget; keep it in the spec contract rule.

## Concrete edits (applied)

1. [`.cursor/skills/review-feature/SKILL.md`](../../.cursor/skills/review-feature/SKILL.md) — allow `reflect-cycle` when the user explicitly asks, not only after a separate human confirm turn.
2. [`process/phases.md`](../phases.md) — same exception on the Reflection playbook.
3. [`AGENTS.md`](../../AGENTS.md) — sessionStart hook injects `process/LOOP.md`.
4. [`process/review-checklist.md`](../review-checklist.md) — blocking OPEN_QUESTIONS must be locked (added during Review, kept).

## Not applied (needs commit / editor)

- Create the Cursor Automation from [`process/automation-draft.md`](../automation-draft.md) only after these files are committed.

## Deferred questions

G1–G6 (game) and A1–A2 (ADR template, test shape) stay in [`OPEN_QUESTIONS.md`](../OPEN_QUESTIONS.md) for cycle 1–2.

## Loop advance

Cycle 0 closed. Next: cycle 1, Phase **research** (Match-3 core in the wiki). No engine, no playable code.
