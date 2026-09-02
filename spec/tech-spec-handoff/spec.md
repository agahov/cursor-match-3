# Feature: tech-spec-handoff

**Status:** closed (cycle 1)

> Closed record (S2). Do not copy process policy from this file.

## Intent

Cycle 1 is **ADR-only**: it selects the engine, language, and test runner and
records them, with no game code. This Feature is the design handoff — its
Gherkin scenarios assert that the tech-spec deliverables exist, agree with each
other, and are ready to hand to Cycle 2 (empty project + module comms). It does
not build a source tree.

## Links

- Wiki: [`wiki/index.md`](../../wiki/index.md) (game fixture)
- Architecture: [`architecture/index.md`](../../architecture/index.md),
  [`architecture/tech-stack.md`](../../architecture/tech-stack.md),
  ADRs [0001](../../architecture/adr/0001-adr-format-madr-lite.md),
  [0002](../../architecture/adr/0002-runtime-stack.md),
  [0003](../../architecture/adr/0003-test-runner-and-code-layout.md)
- Open questions: [`architecture/open-questions.md`](../../architecture/open-questions.md)
- Roadmap cycle: 1 — [`spec/ROADMAP.md`](../ROADMAP.md)

## Gherkin

See `tests/`. Until executable tests exist (ADR 0003, Cycle 2+), pass means the
walkthrough in `tasks.md` is complete and the scenarios check out against the
repo.
