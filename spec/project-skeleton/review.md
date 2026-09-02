# Review: project-skeleton

**Reviewer:** agent (human confirm pending)
**Date:** 2026-08-31
**Verdict:** ready for Reflection

## Gherkin walkthrough

All eight scenarios in `tests/project-skeleton.feature` walked against the repo:

- Project builds and boots → `pnpm build` passes; `src/main.ts` mounts the Vue shell (`Hud.vue`) into `#app`; no rules/board/tiles. **pass**
- Command round-trips through the port → `tests/wiring.smoke.spec.ts` asserts dispatch → `stepOnce` → `pingCount` 1; adapters only call `port.dispatch` (`src/main.ts`), the write happens in `ecs/systems.ts`. **pass**
- Fixed-timestep stepping → `src/app/engine.ts` accumulator loop at `stepMs`; each step drains the queue, runs `step()`, emits a projection (`src/ecs/step.ts`). **pass**
- Render system on an empty world → `renderSystem` reconciles; smoke test asserts `sprites.size` 0 and `stage.children.length` 0. **pass**
- Vue reads the projection → `Hud.vue` renders `step`/`ping`; smoke test sees `step: 0` then `ping: 1` after a step. **pass**
- Module boundary enforced → `eslint.config.js` restricts `ui/` imports; verified a UI→`@/ecs` probe fails lint. **pass**
- Dev test API gated → `src/app/testApi.ts` guards on `import.meta.env.DEV`; `dist/` confirmed to contain no `__match3`. **pass**
- Wiring smoke passes headless → `pnpm test` 4/4. **pass**

## Architecture

- [x] Fits current ADRs and `tech-stack.md` — implements ADRs 0002–0005 (seam, fixed-timestep, two projection paths, seeded RNG, scaffold).
- [x] No new engine/library/top-level folder without an ADR — `src/`, `tests/`, and config are the ADR 0003/0005 layout.
- [x] New dependencies trace to an ADR — `vue`/`pixi.js`/`bitecs` (ADR 0002), `vite`/`vitest`/`@playwright/test`/`typescript`/`eslint` (ADR 0003/0005). `typescript` pinned to 5.6 (vue-tsc incompatible with the registry's TS 7) — flagged for Reflection.

## Spec contract

- [x] Folder is `spec/project-skeleton/` (slug).
- [x] `spec.md`, `tests/project-skeleton.feature`, `tasks.md`, `review.md` exist.
- [x] Gherkin existed before Tasks were executed — authored in Planning; T1–T11 implement against it.
- [x] Terms match glossaries — uses process/architecture terms (command port, projection, step, adapter); no game terms, correctly (skeleton has no board/tiles).

## Standards

- [x] Rules in `.cursor/rules/` unchanged and short.
- [x] Skills stay procedural — none edited this Feature (`grill-research` was added earlier, procedural).
- [x] No duplicate docs — code + ADRs are canonical; no doc duplication.

## Process

- [x] `spec/FOCUS.md` names this Feature (Phase implementation).
- [x] Blocking open questions locked — A9–A16 resolved by ADRs 0004/0005; **A17 (executable Gherkin) is deferred, not blocking**.
- [x] Checklist updated — added "new dependencies trace to an ADR" to `process/review-checklist.md` (Cycle 2 was the first code Cycle; this is a systematic check for future code Features).

## Notes / carry-forward for Reflection

- **TS pin:** `typescript@5.6.3` pinned because `vue-tsc` cannot drive the registry's `typescript@7`. Revisit when `vue-tsc` supports TS 7.
- **A17:** bind `.feature` files to executable steps (Gherkin-over-Vitest) in a later iteration; `project-skeleton` is the first candidate.
- **`.vue` linting:** ESLint currently ignores `.vue` (no vue-eslint-parser); the import-boundary rule covers `ui/*.ts`. Could add `.vue` linting later.

Note (2026-09-02): `.vue` linting added (`eslint-plugin-vue` + `vue-eslint-parser`); import-boundary now covers `src/ui/**/*.{ts,vue}`.
