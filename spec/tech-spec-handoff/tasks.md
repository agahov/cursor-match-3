# Tasks: tech-spec-handoff

Gherkin walkthrough (meaning of "tests pass": `process/glossary.md`):

- [x] Scenarios are complete and unambiguous
- [x] Terms match `process/glossary.md` and `wiki/glossary.md`
- [x] Each scenario can be walked against the repo or product

## Implementation

- [x] T1: Decide ADR format (A1) — `architecture/adr/0001-adr-format-madr-lite.md` + `README.md` index/template
- [x] T2: Lock runtime stack (G3, A4–A7) — `architecture/adr/0002-runtime-stack.md`
- [x] T3: Decide test runner, strategy, and code layout (A2, A3) — `architecture/adr/0003-test-runner-and-code-layout.md`
- [x] T4: Fill `architecture/tech-stack.md` with links to each ADR
- [x] T5: Mark resolved questions in `architecture/open-questions.md`; keep A8 open for Reflection
- [x] T6: Walk each scenario against the repo and confirm; then run `review-feature` — `review.md`, verdict ready for Reflection
