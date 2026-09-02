# Reflection: cycle 3 process (mid-cycle)

Does **not** close Cycle 3. Vertical-slice Research continues. User asked to
simplify the process; the grill locked P7–P11 and chose apply-now.

## What worked

- One-question grill with a recommended answer. Ownership (P7) shaped every
  later choice.
- Recording proposals in `conventions.md` as we went, instead of scattering
  them across chat.

## What was painful

- Gherkin / A17 / “tests pass” restated in ~16 places; closed Features already
  disagreed.
- Live Cycle copied into wiki and architecture indexes.
- `open-questions.md` rows were re-listed as Feature tasks (A9 → T3).
- LOOP playbooks duplicated the skills.

## Concrete edits (applied)

1. [`process/conventions.md`](../conventions.md) — lock P7–P11; replace S1
   (walkthrough in every `tasks.md`) with the P8 template + P9 Gherkin rule.
2. [`process/LOOP.md`](../LOOP.md) — index only; mermaid + Phase → skill table.
3. [`.cursor/skills/distill/SKILL.md`](../../.cursor/skills/distill/SKILL.md) —
   new. [`reflect-cycle`](../../.cursor/skills/reflect-cycle/SKILL.md) always
   runs it.
4. Skills `run-loop-phase`, `new-feature`, `grill-research`, `review-feature` —
   procedures live here; no copied playbooks.
5. Rules `spec-contract.mdc`, `project-map.mdc` — Gherkin only for `type: code`.
6. Templates, glossary, review checklist, `AGENTS.md` — match P7–P11.
7. Wiki/architecture indexes, `match-3-core.md`, `tech-stack.md` — **status** +
   **origin**; no “we are in Cycle N”.
8. `wiki/decisions.md` and deferred A17 — P8 columns; A17 notes no longer copy
   the glossary paragraph.
9. Closed Feature `spec.md` files — one-line S2 note. `tasks.md` / `review.md`
   untouched.

## Not applied

- Binding `.feature` files (A17) — still deferred.
- Rewriting closed Feature Gherkin that asserted “every Feature has Gherkin”
  (`bootstrap-workflow`). That is a record.

## Deferred

- First vertical-slice Feature still to be grilled from
  `wiki/concepts/match-3-core.md` (G4).
- Whether an `implement-feature` skill is needed. Implementation stays
  “execute `tasks.md`, then `review-feature`” until it hurts.

## Loop advance

Cycle stays **3**, Phase stays **research**. Next action: first-slice research
with `grill-research`.
