# 0002. Runtime stack: TypeScript + PixiJS + bitecs + Vue

- **Status:** accepted
- **Date:** 2026-08-30
- **Resolves:** G3, A4, A5, A6, A7

## Context

Match-3 is the test fixture for the workflow, not the product. We want a stack
that is web-native (easy to run and share), keeps game rules deterministic and
testable in isolation, and gives a clean seam between simulation, rendering, and
UI. The proposed direction in `open-questions.md` (PixiJS + bitecs + TypeScript +
Vue) has held up; this ADR locks it and the boundaries around it.

## Decision

**Language:** TypeScript, strict mode.

**Simulation (source of truth):** [bitecs](https://github.com/NateTheGreatt/bitECS)
ECS.
- Components are **data-only** (typed arrays / plain structs). No behaviour on
  components, no class-based ECS entities. (A4)
- Systems are **functions/closures** that query the world; no system classes. (A4)
- Reusable behaviour is expressed with **capability/marker tags plus data
  components**; systems query compositions rather than concrete types. (A7)

**Rendering:** [PixiJS](https://pixijs.com/) owns the board's visuals and
**board hit-testing**. (A6)

**UI:** [Vue](https://vuejs.org/) owns HUD and controls. (A6)

**Boundaries (the seam):**
- The ECS world is the single **source of truth**. (A5)
- Input and intent enter only through one **command port**: PixiJS board input
  and Vue HUD controls both dispatch commands through the same port. (A5, A6)
- Vue and PixiJS never mutate the world directly; they read **read-only
  projections** the simulation exposes. (A5)
- In dev/test builds the command port also exposes a **test-only** dispatch +
  projection-read hook on `window`, so acceptance tests drive the same seam
  (see ADR 0003). It is stripped from production builds.

## Consequences

- Game rules can be tested without a renderer (see ADR 0003).
- Adapters (Pixi, Vue) stay thin: dispatch commands, render projections. Rule
  logic living in an adapter is a review smell. (A7)
- Data-only ECS + tag composition keeps systems reusable but demands discipline:
  reviewers check that new behaviour is a system over tags/components, not a
  special-cased branch.
- Web target simplifies sharing and CI; native packaging is out of scope for now.
- bitecs is lower-level than a full engine; we accept writing more wiring in
  exchange for determinism and a small footprint.

## Alternatives

- **Phaser / full engine** — batteries included, but blurs the sim/render seam
  and complicates deterministic rule tests.
- **Class-based ECS or OOP entities** — rejected per A4; harder to keep
  components data-only and systems composable.
- **Pixi-native UI (no DOM framework)** — draw HUD and controls inside the Pixi
  scene instead of a DOM layer. Gives one render/input path and animation
  coherence with the board, but we would rebuild text layout, accessibility, and
  form controls that the DOM gives for free. Rejected: HUD is chrome, not
  board-space; the Vue/DOM layer is the cheaper, more accessible home for it.
  (React vs Vue is not a real alternative here — both are interchangeable DOM
  frameworks reading the same projections; the real axis is DOM-UI vs
  Pixi-native UI.)
