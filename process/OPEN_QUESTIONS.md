# Open questions

## Locked process defaults

Change only in a later Reflection.

| ID | Question | Decision |
| --- | --- | --- |
| P1 | Feature IDs? | **Slugs**, not numbers |
| P2 | Task tracking? | **Markdown** in `spec/<slug>/tasks.md` until we outgrow it |
| P3 | Who signs Review? | **Agent fills** `review.md`; **human confirms** |
| P4 | Wiki format? | **Markdown + Mermaid** default; interactive HTML only under `wiki/concepts/<name>/` |
| P5 | When may an agent edit rules/skills? | **Only in Reflection**, or when the user explicitly asks |
| P6 | Gherkin runner? | **Deferred** until the tech-stack **ADR** |

| G1 | What game is in this repo? | **Match-3** as the fixture to test the workflow, not as the product. |
| S1 | Tasks template walkthrough? | Restored in `spec/_templates/feature/tasks.md` |
| S2 | Closed Feature tasks/review? | **Records** at close. Do not rewrite for later process changes. |
| S3 | `AGENTS.md` vs `project-map.mdc`? | Map in `AGENTS.md`. Rule holds invariants only. |
| S4 | Roadmap vs `LOOP.md`? | Roadmap is the sequence. **Live Cycle is `LOOP.md`.** |
| S5 | Cursor Automation? | Draft only. Create when the user asks. |
| S6 | `.gitignore`? | Added (OS, env, common build dirs). |
| S7 | Entry file names? | `wiki/index.md`, `architecture/index.md`, `spec/ROADMAP.md`, `process/LOOP.md`. |

## Confirmed Cycle 1 design decisions

| ID | Question | Notes |
| --- | --- | --- |
| G2 | Platform? | **Web**, confirmed by the user for the workflow fixture. |
| G4 | First playable scope? | **Confirmed boundary:** [`wiki/concepts/match-3-core.md`](../wiki/concepts/match-3-core.md) covers one local board, legal swaps, match resolution, cascades, score, moves, win/lose. |
| G5 | Art: original vs placeholders? | **Rounded-square placeholders**, with a distinct symbol or shape as well as color; original art is deferred. |
| G6 | Single-player only? | **Local single-player only**; no accounts or network dependency. |

## Still open (cycle 2 architecture)

| ID | Question | Notes |
| --- | --- | --- |
| G3 | Engine and rendering candidates? | Preferred direction: **PixiJS** for rendering, **bitecs** for ECS logic, TypeScript, and Vue for UI. Formal runtime/engine boundaries remain a Cycle 2 ADR. |
| A1 | ADR template (e.g. MADR)? | Cycle 2 |
| A2 | Deterministic game-rule tests vs engine-coupled tests? | After runner **ADR** |
| A3 | Where will source code and executable tests live? | Decide with the tech-stack **ADR** in Cycle 2; do not create a source tree before then |
| A4 | ECS component model and coding style? | Proposed: data-only bitecs components and closure/function-based systems; no class-based ECS components. |
| A5 | How does ECS connect to UI? | Proposed: ECS is the source of truth; commands go in and read-only projections come out. Vue must not mutate the world directly. |
| A6 | How does board input enter the simulation? | Proposed: PixiJS owns board hit-testing; Vue owns HUD/controls; both dispatch through the same command port. |
| A7 | How are reusable systems and special tags reviewed? | Proposed: capability/marker tags plus data components; systems query compositions. Reviewers check for system reuse and keep rule logic out of adapters. |
| A8 | How is Cycle 2 architecture work tracked? | **ADR-only**, with no product Feature. The Planning playbook needs a documented accommodation before Cycle 2. |
