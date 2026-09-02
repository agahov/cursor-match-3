# Tech stack

**Status:** locked in Cycle 1 via ADRs. See [`adr/`](adr/).

| Layer | Choice | ADR |
| --- | --- | --- |
| Language | TypeScript (strict; **pinned 5.6** — `vue-tsc` cannot drive registry TS 7) | [0002](adr/0002-runtime-stack.md) |
| Simulation | bitecs ECS — data-only components, function systems, tag composition | [0002](adr/0002-runtime-stack.md) |
| Rendering | PixiJS — board visuals + hit-testing | [0002](adr/0002-runtime-stack.md) |
| UI | Vue — HUD + controls | [0002](adr/0002-runtime-stack.md) |
| Seam | single command port in; read-only projections out | [0002](adr/0002-runtime-stack.md) |
| Build | Vite (`vue-ts` template, repo root) | [0003](adr/0003-test-runner-and-code-layout.md), [0005](adr/0005-project-scaffold.md) |
| Package manager | pnpm; Node LTS pinned | [0005](adr/0005-project-scaffold.md) |
| Test runners | Vitest (unit/integration) and Playwright (acceptance). Gherkin-over-Vitest binding is **A17**, deferred | [0003](adr/0003-test-runner-and-code-layout.md) |
| Test strategy | 3 tiers: deterministic rules → wiring/init smoke → acceptance E2E via `window` test-command API | [0003](adr/0003-test-runner-and-code-layout.md) |
| Module comms | tagged-union commands (queued/drained per step), fixed-timestep loop, two projection paths, seeded RNG, ESLint import boundary | [0004](adr/0004-module-communication-contract.md) |

## Boundaries

The ECS world is the single source of truth. PixiJS (board input) and Vue (HUD)
dispatch through one command port and render read-only projections; neither
mutates the world directly. A **fixed-timestep** loop in `app/` drains commands,
runs systems, and emits projections each step (ADR 0004).

## Built (Cycle 2)

Empty skeleton at repo root (`src/`, `tests/`). No game rules yet. Game
features start in Cycle 3.
