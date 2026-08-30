# Architecture open questions

Engine, rendering, ECS, and test-runner questions for this project. Resolve
them with **ADR**s (see [`adr/`](adr/)) in the tech-stack Cycle. Game design
decisions live in [`../wiki/decisions.md`](../wiki/decisions.md); method
conventions live in [`../process/conventions.md`](../process/conventions.md).

## Direction (proposed, not locked)

| ID | Question | Notes |
| --- | --- | --- |
| G3 | Engine and rendering candidates? | Preferred direction: **PixiJS** for rendering, **bitecs** for ECS logic, TypeScript, and Vue for UI. Formal runtime/engine boundaries remain an ADR |
| A1 | ADR template (e.g. MADR)? | Decide in the tech-stack Cycle |
| A2 | Deterministic game-rule tests vs engine-coupled tests? | After the runner **ADR** |
| A3 | Where will source code and executable tests live? | Decide with the tech-stack **ADR**; do not create a source tree before then |
| A4 | ECS component model and coding style? | Proposed: data-only bitecs components and closure/function-based systems; no class-based ECS components |
| A5 | How does ECS connect to UI? | Proposed: ECS is the source of truth; commands go in and read-only projections come out. Vue must not mutate the world directly |
| A6 | How does board input enter the simulation? | Proposed: PixiJS owns board hit-testing; Vue owns HUD/controls; both dispatch through the same command port |
| A7 | How are reusable systems and special tags reviewed? | Proposed: capability/marker tags plus data components; systems query compositions. Reviewers check for system reuse and keep rule logic out of adapters |
| A8 | How is the architecture Cycle tracked? | **ADR-only**, with no product Feature. The Planning playbook needs a documented accommodation for an ADR-only Cycle |
