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

## Still open

None. New architecture questions get a row here and are resolved by an ADR.
