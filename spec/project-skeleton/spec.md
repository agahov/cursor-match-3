# Feature: project-skeleton

**Status:** planning

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

See `tests/`. Executable once the project exists: the wiring/init smoke tier
(ADR 0003/0004) backs the round-trip and adapter-init scenarios.
