# Architecture open questions

Engine, rendering, ECS, and test-runner questions. Resolve them with **ADR**s
(see [`adr/`](adr/)). Game decisions: [`../wiki/decisions.md`](../wiki/decisions.md).
Method: [`../process/conventions.md`](../process/conventions.md).

New rows use the P8 schema: `ID`, `type`, `status`, `depends`, `item`.

## Resolved (Cycle 1)

| ID | Question | Resolution |
| --- | --- | --- |
| G3 | Engine and rendering candidates? | **Locked**: TypeScript + PixiJS (render) + bitecs (ECS) + Vue (UI) — [ADR 0002](adr/0002-runtime-stack.md) |
| A1 | ADR template (e.g. MADR)? | **MADR-lite** — [ADR 0001](adr/0001-adr-format-madr-lite.md) |
| A2 | Deterministic game-rule tests vs engine-coupled tests? | Two tiers, deterministic-first — [ADR 0003](adr/0003-test-runner-and-code-layout.md) |
| A3 | Where will source code and executable tests live? | Layout decided; **tree created in Cycle 2** — [ADR 0003](adr/0003-test-runner-and-code-layout.md) |
| A4 | ECS component model and coding style? | Data-only components, function systems, no ECS classes — [ADR 0002](adr/0002-runtime-stack.md) |
| A5 | How does ECS connect to UI? | ECS is source of truth; command in, read-only projection out — [ADR 0002](adr/0002-runtime-stack.md) |
| A6 | How does board input enter the simulation? | Pixi board hit-testing + Vue HUD, both via one command port — [ADR 0002](adr/0002-runtime-stack.md) |
| A7 | How are reusable systems and special tags reviewed? | Capability/marker tags + data components; rule logic out of adapters — [ADR 0002](adr/0002-runtime-stack.md) |
| A8 | How is the architecture Cycle tracked? | **ADR-only** Feature (`spec/tech-spec-handoff/`). No source tree |

## Resolved (Cycle 2 — empty project + module comms)

Wiring for the buildable empty skeleton, locked in Planning. The skeleton
Feature (`spec/project-skeleton/`) implements them. No game features.

| ID | Question | Resolution |
| --- | --- | --- |
| A9 | Command shape and dispatch? | Tagged-union commands, single `dispatch()`, **queued and drained per step**; adapters only produce commands, selection lives in the world — [ADR 0004](adr/0004-module-communication-contract.md) |
| A10 | Projection shape and delivery? | Two paths (HUD immutable snapshot in `shallowRef`; board render-system + entity→`DisplayObject` map); rule-state vs render-state partition — [ADR 0004](adr/0004-module-communication-contract.md) |
| A11 | Who steps the simulation? | **Fixed-timestep** rAF loop in `app/`: drain queue → run systems → emit projections; render interpolates — [ADR 0004](adr/0004-module-communication-contract.md) |
| A12 | RNG ownership / determinism? | Seeded PRNG created in `app/`, injected into the world; no global `Math.random`; seed configurable — [ADR 0004](adr/0004-module-communication-contract.md) |
| A13 | How is the module boundary enforced? | ESLint import-boundary rule: **UI imports only `ports/`**; render systems are the board's read-only read path — [ADR 0004](adr/0004-module-communication-contract.md) |
| A14 | What does the wiring/init smoke tier assert? | Command→projection round trip after a step + adapters construct/subscribe headless — [ADR 0004](adr/0004-module-communication-contract.md) |
| A15 | Scaffolding choices? | Vite **`vue-ts`** at repo root, **pnpm**, Node LTS pinned — [ADR 0005](adr/0005-project-scaffold.md) |
| A16 | Test-command API surface and gating? | `window.__match3 = { dispatch, getProjection }`, dev/test-only, stripped from production — [ADR 0004](adr/0004-module-communication-contract.md) |

## Still open

None. New architecture questions get a P8 row here and are resolved by an ADR.

## Deferred

| ID | Type | Status | Depends | Item |
| --- | --- | --- | --- | --- |
| A17 | code | deferred | A3 | Bind `.feature` files to Vitest steps (approach in [ADR 0003](adr/0003-test-runner-and-code-layout.md)). First candidate: `project-skeleton` |
