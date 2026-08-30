# Architecture open questions

Engine, rendering, ECS, and test-runner questions for this project. Resolve
them with **ADR**s (see [`adr/`](adr/)) in the tech-stack Cycle. Game design
decisions live in [`../wiki/decisions.md`](../wiki/decisions.md); method
conventions live in [`../process/conventions.md`](../process/conventions.md).

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
| A8 | How is the architecture Cycle tracked? | **ADR-only** with a Gherkin *design-handoff* Feature (`spec/tech-spec-handoff/`). Accommodation folded into the Planning playbook in [`process/LOOP.md`](../process/LOOP.md) during Cycle 1 Reflection |

## Open (Cycle 2 — empty project + module comms)

Wiring questions for the buildable empty skeleton. Directions below are
**proposed, not locked**; Planning resolves them (via an ADR where a choice is
load-bearing) and the skeleton Feature implements them. No game features.

| ID | Question | Proposed direction |
| --- | --- | --- |
| A9 | Command shape and dispatch? | Commands are a plain **tagged union** (discriminated by `type`); one `dispatch(command)` on the port, **queued and drained on the tick** so ordering is deterministic. Input example: the board adapter hit-tests screen→cell and dispatches a select-cell command; a generic system drains it and sets a **selectable/selected marker in the world** — selection lives in the world, never written by the adapter |
| A10 | Projection shape and delivery? | **Two paths, no serialized parallel model for the board.** *HUD (Vue):* a small **immutable snapshot** (aggregate state) in a `shallowRef`. *Board (Pixi):* a **render system** over general components + markers (per A4/A7) that syncs an adapter-side entity→`DisplayObject` map each tick — incremental per entity, so full-snapshot-vs-diff dissolves. Components partition into **rule-state** (logic: grid position, kind, markers like interactable/selectable) and **render-state** (pixels: x, y, size, style, derived from kind + theme). **Rule systems never touch render-state; render systems read rule-state + markers and never write it.** Concrete component sets are Cycle 3 design; the partition + render-as-systems rule is formalized in the module-comms ADR (0004) |
| A11 | Who steps the simulation? | The composition root (`app/`) owns a **fixed-timestep** loop (rAF-driven); ECS systems run each tick. Alternative: step only on command. Decide in Planning |
| A12 | RNG ownership / determinism? | A **seeded PRNG** created in `app/` and injected into the world; no system calls global `Math.random`. Seed is configurable for rule tests and E2E |
| A13 | How is the module boundary enforced? | Folder convention **plus** an ESLint import-boundary rule; adapters (`render/`, `ui/`) import only from `ports/`, never `ecs/` internals |
| A14 | What does the wiring/init smoke tier assert (ADR 0003)? | (a) a command dispatched through the port changes the projection; (b) each adapter constructs and subscribes without error. Headless, no real canvas |
| A15 | Scaffolding choices? | Vite **`vue-ts`** template at repo root, a single package manager, Node LTS. Confirm exact versions in Planning |
| A16 | Test-command API surface and gating? | `window.__match3 = { dispatch, getProjection }`, registered only in dev/test builds (`import.meta.env.DEV` / test flag) and stripped from production |
