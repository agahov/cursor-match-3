# 0003. Test runner, test strategy, and code layout

- **Status:** accepted
- **Date:** 2026-08-30
- **Resolves:** A2, A3 (unblocks P6)

## Context

Until now "tests pass" meant a completed Gherkin walkthrough (see
`process/glossary.md`); a runnable harness was deferred to this ADR (P6). With
the runtime stack locked (ADR 0002) we can choose a runner, decide how Gherkin
maps to executable tests, and say **where** code and tests live — without
building the tree yet (Cycle 2 is the empty project skeleton).

## Decision

**Runners:** [Vitest](https://vitest.dev/) for unit/integration (native to the
Vite/TS/Vue stack, fast, TS-first) and [Playwright](https://playwright.dev/) for
acceptance.

**Test strategy (A2):** three tiers, cheapest and most-valuable first.
1. **Deterministic rule tests** (Vitest) — the ECS simulation and match-3 rules
   run headless, with no PixiJS or DOM. These are the primary tests and back
   most Gherkin scenarios. A seeded RNG keeps them reproducible.
2. **Wiring / init smoke** (Vitest, headless) — assert the modules connect: a
   command dispatched through the port changes the read-only projection, and
   each adapter (Pixi app, Vue mount) initialises and subscribes. This is the
   "modules talk to each other" test; kept thin, no rule logic asserted here.
   Concrete tests land in **Cycle 2** (empty project + module comms); this ADR
   fixes the tier as its contract.
3. **Acceptance E2E** (Playwright) — a *small* set of major product journeys
   through the real wired app, tagged `@e2e`. They drive the board through a
   **test command API** exposed on `window` (e.g. `window.__game.dispatch(...)`
   plus a projection read), not by pixel-clicking the Pixi canvas, and assert on
   the Vue/DOM HUD and/or the projection. This exercises the genuine command-port
   seam deterministically (seeded RNG). Real E2E tests land in **Cycle 3**
   (vertical slice); this ADR fixes the tier and the interaction path.

Rule logic is never tested through an adapter or through E2E; tiers 2–3 test
wiring and journeys, not the rule matrix.

**Executable Gherkin:** `.feature` files under a Feature bind to executable
steps. Rule scenarios bind to **Vitest** via a Gherkin binding (e.g.
`@amiceli/vitest-cucumber`); a hand-picked subset of journey scenarios (tagged
`@e2e`) is driven by **Playwright**. The `.feature` files remain the contract
authored in Planning. The exact Vitest–Gherkin binding package is confirmed when
the first executable Feature lands (Cycle 2+); this ADR fixes Vitest + a
Gherkin-over-Vitest binding, and Playwright for `@e2e`, as the approach.

**Code + test layout (A3)** — decided now, **created in Cycle 2**:

```
/                      Vite + TS project root (package.json, vite/vitest config)
  src/
    domain/            pure match-3 rules, deterministic, engine-free
    ecs/               bitecs world, data-only components, function systems
    ports/             command port + read-only projection types (the seam)
    render/            PixiJS adapter (board visuals + hit-testing)
    ui/                Vue components (HUD, controls)
    app/               composition root wiring ports to adapters
  tests/
    features/          *.feature (mirrors spec/<slug>/tests where executable)
    steps/             Gherkin step bindings (Vitest)
    e2e/               Playwright acceptance journeys (@e2e)
  *.spec.ts            unit tests colocated with src where convenient
```

The command port (ADR 0002) exposes a **test-only** dispatch + projection-read
hook on `window` in dev/test builds; the acceptance tier drives the board
through it. Production builds do not expose it.

`spec/<slug>/tests/*.feature` stays the authored source of scenarios; executable
copies/links under `tests/features/` come with implementation.

## Consequences

- P6 is unblocked: once code exists, "tests pass" can mean **green Vitest**
  including Gherkin-bound scenarios, not only a manual walkthrough. Until the
  first Feature ships code, the walkthrough definition still applies.
- Deterministic-first keeps the suite fast and stable; adapters stay thin.
- No source tree is created in Cycle 1; this is a contract for Cycles 2–3.
- Choosing the concrete Gherkin binding later avoids locking a library before we
  write a real step file.
- The `window` test-command API is a forcing function: it keeps the command
  port the single entry point, since even E2E must go through it. It is a
  dev/test-only surface and must be stripped from production builds.
- Two runners (Vitest + Playwright) is more setup, accepted for a stable,
  meaningful acceptance layer. The `@e2e` set stays small to limit flake and CI
  cost.

## Alternatives

- **Jest** — mature, but extra config on a Vite stack; Vitest is the natural fit.
- **@cucumber/cucumber standalone** — full Gherkin toolchain, but a second runner
  alongside Vitest; a Vitest binding keeps one runner.
- **Playwright for rule tests** — wrong tier; rules stay in the deterministic
  Vitest tier. Playwright is used only for the small `@e2e` journey set.
- **E2E by pixel-clicking the canvas** — realistic input, but brittle (layout/
  pixel math) and weak assertions (canvas state is not readable from the DOM).
  Rejected in favour of the `window` test-command API.
- **HUD-only acceptance** — simplest, but never touches the board seam, so it
  would not test the interaction that matters. Rejected.
