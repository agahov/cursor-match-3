# Feature: project-skeleton

**Status:** closed (cycle 2)

## Intent

Stand up the buildable empty project and wire the modules per ADRs 0002–0005:
the command port, a fixed-timestep loop, the two projection paths, a seeded RNG,
the ESLint import boundary, and the dev-only `window` test-command API. This is
the first Feature with real code. It contains **no game rules, tiles, board, or
scoring** — only the empty skeleton and the wiring that later Cycles build on.

## Links

- Architecture: [`tech-stack.md`](../../architecture/tech-stack.md),
  ADRs [0002](../../architecture/adr/0002-runtime-stack.md),
  [0003](../../architecture/adr/0003-test-runner-and-code-layout.md),
  [0004](../../architecture/adr/0004-module-communication-contract.md),
  [0005](../../architecture/adr/0005-project-scaffold.md)
- Roadmap cycle: 2 — [`spec/ROADMAP.md`](../ROADMAP.md)

## Gherkin

See `tests/`. Until A17, the `.feature` is the contract; `tests/wiring.smoke.spec.ts`
covers it (hand-written Vitest). Walkthrough meaning of “tests pass”: `process/glossary.md`.
