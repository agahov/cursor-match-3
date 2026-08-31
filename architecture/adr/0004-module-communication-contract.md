# 0004. Module communication contract

- **Status:** accepted
- **Date:** 2026-08-30
- **Resolves:** A9, A10, A11, A12, A13, A14, A16

## Context

ADR 0002 set ECS-as-source-of-truth with a **command port** in and **read-only
projections** out; ADR 0003 set the test tiers. Cycle 2 builds the empty
skeleton, so the concrete shape of the seam must be fixed — commands, how the
simulation steps, how projections reach the adapters, RNG, boundary
enforcement, the wiring smoke contract, and the dev test surface — all **without
game rules**.

## Decision

**Commands (A9).** Commands are a plain **tagged union** discriminated by
`type`; a single `dispatch(command)` on the command port. Commands are
**enqueued and drained once per simulation step**, not applied immediately, so
ordering is deterministic and independent of when input arrives. Adapters only
*produce* commands — e.g. the board adapter hit-tests a pointer to a cell and
dispatches a select-cell command. All intent (including selection) lives in the
world, set by systems that consume the queue; **adapters never write
components**.

**Simulation step (A11).** The composition root (`app/`) owns a
**fixed-timestep loop** driven by `requestAnimationFrame`. Each step: drain the
command queue → run systems → emit projections. Rendering may **interpolate**
between steps; rule outcomes never depend on frame timing or wall-clock.

**Projection delivery (A10).** Two paths, no serialized parallel world:
- **HUD (Vue):** after a step the world emits a small **immutable snapshot** of
  aggregate state; the Vue adapter holds it in a `shallowRef` and renders
  reactively.
- **Board (Pixi):** a **render system** runs each step, reading rule components +
  markers and syncing an adapter-side **entity→`DisplayObject` map**
  (create/update/remove). Incremental per entity — no full-snapshot diff.

**Component partition (A10).** Components split into **rule-state**
(deterministic logic: grid-coordinate positions, kinds, capability/marker tags
per A4/A7) and **render-state** (pixels: x, y, size, style, derived from kind +
theme). **Rule systems never read or write render-state; render systems read
rule-state + markers and write only render-state and the scene graph.** Concrete
component sets are Cycle 3 game design, not this ADR.

**RNG (A12).** A single **seeded PRNG** is created in `app/` and injected into
the world; no system calls global `Math.random`. The seed is configurable so
rule tests and E2E are reproducible.

**Boundary enforcement (A13).** The **UI adapter (Vue, `ui/`) imports only
`ports/`** — enforced by an ESLint import-boundary rule so violations fail
lint/CI. **Render systems (`render/`) are the board's read path**: they may
*read* rule-state (the world) but never write it. No adapter or render system
writes rule components; writes happen only in `ecs/` systems that consume the
command queue (reviewers check render read-only-ness).

**Wiring/init smoke contract (A14).** The skeleton ships a headless Vitest test
that (a) dispatches a command through the port and observes the projection
change after a step, and (b) constructs each adapter and confirms it subscribes
without error. No rule logic is asserted.

**Test-command surface (A16).** In dev/test builds the composition root exposes
`window.__match3 = { dispatch, getProjection }` bound to the same command port
and projection; it is guarded by a dev/test flag and **stripped from
production**. Playwright acceptance drives the board through it.

## Consequences

- One entry point for all intent (input, HUD, E2E) → deterministic, testable,
  thin adapters.
- Fixed-timestep gives a natural home for animated cascades while keeping rules
  frame-independent.
- The render system reads live components (no serialization cost) but must stay
  read-only w.r.t. rule state; reviewers check this.
- bitecs components cannot hold object references, so the entity→`DisplayObject`
  map lives in the render adapter, keyed by entity id.
- The `window` surface must be gated out of production (security + footprint).

## Alternatives

- **Step-on-command (no continuous loop)** — simpler and trivially
  deterministic, but awkward for time-based cascade/gravity animation and
  continuous effects. Rejected for a game that should feel animated.
- **Immediate command application (no queue)** — loses deterministic ordering
  and a clean step boundary for emitting projections. Rejected.
- **One serialized projection for both HUD and board** — wasteful per-frame
  serialization of the whole board plus an awkward diff; the render-system path
  is leaner. Rejected.
- **Adapter-written selection/highlight** — bypasses the seam and is invisible
  to tests. Rejected; selection lives in the world.
