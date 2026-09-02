# Reflection: cycle 2 (Empty project + module comms)

Closes Cycle 2. The empty skeleton builds, modules talk through the command
port, and the wiring/init smoke is green. Review verdict for
`project-skeleton` was **ready for Reflection**.

## What worked

- Interactive Research (`grill-research`): one question at a time with a
  recommended answer. A11 (fixed-timestep) was a real fork; asking it before
  writing ADR 0004 avoided another false dichotomy.
- The module-comms ADR (0004) before scaffolding: command queue, two
  projection paths, rule/render partition, and the `window` test API were
  already decided when code landed.
- User pushback on A10/A13: no serialized parallel board model; render
  systems read the world; UI is the one adapter gated to `ports/`. The ADR
  was refined to match that.
- First code Feature still honoured the spec contract: Gherkin first, then
  Tasks, then a walkthrough against a real Vitest suite.

## What was painful or ambiguous

- **Gherkin vs executable tests.** The `.feature` files are the contract, not
  a runner. Covering them with hand-written Vitest (`tests/wiring.smoke.spec.ts`)
  looked like we were going to generate tests from Gherkin, or never execute
  them. The glossary still said “until a test runner exists” — the runner
  (Vitest) exists; **binding `.feature` files is A17**, deferred.
- The registry’s TypeScript 7 is incompatible with `vue-tsc`; we pinned
  `typescript@5.6.3`. Easy to miss on a later `pnpm update`.
- ESLint ignores `.vue`, so the import-boundary rule only covers `ui/*.ts`.
- Forward cycle numbers in ADRs remain fragile (Cycle 1 lesson; still true).

## Concrete edits (applied)

1. [`process/glossary.md`](../glossary.md) — “tests pass” now matches the dual
   state: Gherkin is the contract; Vitest is the harness; `.feature` files are
   not executed until A17.
2. [`process/conventions.md`](../conventions.md) — P6 updated: Gherkin runner
   is **A17**, not “until the tech-stack ADR” (that ADR already exists).
3. [`process/LOOP.md`](../LOOP.md) — Implementation playbook: cover Gherkin
   with hand-written Vitest until A17; do not generate tests from `.feature`
   files.
4. [`.cursor/rules/spec-contract.mdc`](../../.cursor/rules/spec-contract.mdc) —
   drop the stale “until a runner ADR” line; point at the glossary.
5. [`architecture/tech-stack.md`](../../architecture/tech-stack.md) — stack is
   built; record the TS 5.6 pin and that the Gherkin-over-Vitest binding is A17.
6. [`process/review-checklist.md`](../review-checklist.md) — “new dependencies
   trace to an ADR” (added during Review, kept).

## Deferred

- **A17** — make `.feature` files executable via Gherkin-over-Vitest
  step-binding. First candidate: `project-skeleton`. User asked to defer to a
  later iteration, not Cycle 3 by default.
- Playwright `@e2e` journeys — Cycle 3 vertical-slice contract (ADR 0003).
- Revisit `typescript@5.6` when `vue-tsc` supports TS 7.
- Add `.vue` linting (vue-eslint-parser) so the UI boundary covers templates.

## Loop advance

Cycle 2 closed. Next: **Cycle 3 — Vertical slice**, Phase **research**.
Game design emerges per slice from
[`wiki/concepts/match-3-core.md`](../../wiki/concepts/match-3-core.md) (G4).
Use `grill-research`. No executable Gherkin binding unless the user asks.
