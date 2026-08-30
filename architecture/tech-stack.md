# Tech stack

**Status:** locked in Cycle 1 via ADRs. See [`adr/`](adr/).

| Layer | Choice | ADR |
| --- | --- | --- |
| Language | TypeScript (strict) | [0002](adr/0002-runtime-stack.md) |
| Simulation | bitecs ECS — data-only components, function systems, tag composition | [0002](adr/0002-runtime-stack.md) |
| Rendering | PixiJS — board visuals + hit-testing | [0002](adr/0002-runtime-stack.md) |
| UI | Vue — HUD + controls | [0002](adr/0002-runtime-stack.md) |
| Seam | single command port in; read-only projections out | [0002](adr/0002-runtime-stack.md) |
| Build | Vite | [0003](adr/0003-test-runner-and-code-layout.md) |
| Test runners | Vitest (unit/integration, + Gherkin-over-Vitest binding) and Playwright (acceptance) | [0003](adr/0003-test-runner-and-code-layout.md) |
| Test strategy | 3 tiers: deterministic rules → wiring/init smoke → acceptance E2E via `window` test-command API | [0003](adr/0003-test-runner-and-code-layout.md) |

## Boundaries

The ECS world is the single source of truth. PixiJS (board input) and Vue (HUD)
dispatch through one command port and render read-only projections; neither
mutates the world directly.

## Not yet built

Code layout is decided (ADR 0003) but **the source tree is created in Cycle 2**
(empty project + module comms). No engine/game code exists in Cycle 1.
