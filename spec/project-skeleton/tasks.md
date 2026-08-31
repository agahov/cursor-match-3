# Tasks: project-skeleton

Gherkin walkthrough (meaning of "tests pass": `process/glossary.md`):

- [x] Scenarios are complete and unambiguous
- [x] Terms match `process/glossary.md` and `wiki/glossary.md`
- [x] Each scenario can be walked against the repo or product

## Implementation

- [x] T1: Scaffold Vite (`vue` + TS) at repo root; pnpm; pin Node LTS (`.nvmrc`, `engines`) — ADR 0005
- [x] T2: Create the source/test layout per ADR 0003 (`src/{domain,ecs,ports,render,ui,app}`, `tests/`)
- [x] T3: Define the command port — tagged-union command type, `dispatch()`, and a queue drained per step (A9)
- [x] T4: Define projection types and the two delivery paths (aggregate snapshot for HUD; render-system contract for board) (A10)
- [x] T5: Add bitecs world + seeded PRNG injected in `app/`; no global `Math.random` (A12)
- [x] T6: Implement the fixed-timestep loop in `app/`: drain queue → run systems → emit projection; rAF-driven (A11)
- [x] T7: Vue adapter mounts an empty shell and reads the projection via `shallowRef` (A10)
- [x] T8: Pixi adapter: create the app and a render system syncing an entity→`DisplayObject` map against an empty world (A10)
- [x] T9: Expose `window.__match3 = { dispatch, getProjection }` in dev/test only; strip from production (A16) — verified absent from `dist/`
- [x] T10: Add the ESLint import-boundary rule so UI imports only `ports/` (A13) — verified the rule rejects a UI→ECS import
- [x] T11: Wiring/init smoke test in Vitest: command→projection round trip + adapters construct/subscribe headless (A14) — 4/4 pass
- [x] T12: Walk the scenarios against the repo; then run `review-feature` — `review.md`, verdict ready for Reflection

## Verification (2026-08-31)

- `pnpm typecheck` (vue-tsc) — pass
- `pnpm test` (Vitest) — 4/4 pass
- `pnpm lint` (ESLint) — clean; boundary rule verified against a probe import
- `pnpm build` (vue-tsc + vite) — pass; `dist/` has no `__match3`

Installed: `vue@3.5`, `pixi.js@8`, `bitecs@0.4`, `vite@8`, `vitest@4`,
`typescript@5.6` (pinned; vue-tsc is incompatible with the registry's TS 7).
