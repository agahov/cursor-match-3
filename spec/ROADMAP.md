# Roadmap

High-level view of the project. Features live in `spec/<slug>/`. **Current Cycle and Phase:** [`FOCUS.md`](FOCUS.md).

| Cycle | Focus | Outcome |
| --- | --- | --- |
| **0** | Workflow skeleton | Folders, glossary seed, rules/skills, Feature `bootstrap-workflow`, process defaults locked, one Reflection |
| **1** | Tech spec | Engine, language, test runner selected; `architecture/tech-stack.md` filled. ADR-only — no game code |
| **2** | Empty project + module comms | Buildable empty project skeleton; modules defined with working communication/wiring between them; no game features yet |
| **3** | Vertical slice | Game built as vertical slices with real Gherkin and code. Game design (fantasy, board, match rules) emerges per slice; game terms land in `wiki/glossary.md` and concept diagrams in `wiki/` as they arise |

Cycle 2 (Game design core) was merged into the Vertical slice Cycle: design is
done slice-by-slice rather than up front, and concept diagrams live in `wiki/`.
