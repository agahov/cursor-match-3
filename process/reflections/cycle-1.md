# Reflection: cycle 1 (Tech spec)

Closes Cycle 1. The stack is locked via ADRs; no game code was written. Review
verdict for `tech-spec-handoff` was **ready for Reflection**.

## What worked

- Treating an ADR-only Cycle as a Feature: a *design-handoff* Gherkin spec
  (`spec/tech-spec-handoff/`) whose scenarios assert the ADRs exist and agree.
  The spec contract held even without product code.
- MADR-lite (ADR 0001) kept each decision to context/decision/consequences and
  made supersession explicit.
- Grilling before writing caught a **false dichotomy**: the runtime-stack
  Alternatives listed "React vs Vue" (interchangeable DOM frameworks). The real
  axis is **DOM UI vs Pixi-native UI**; ADR 0002 now records that.
- Designing the test tiers surfaced a real constraint: the board is a Pixi
  canvas, so E2E can't reliably pixel-click tiles. The **`window` test-command
  API** (ADR 0002/0003) turns that into a forcing function — even acceptance
  tests go through the one command port.

## What was painful or ambiguous

- The Planning playbook assumed a product Feature; an ADR-only Cycle had no
  documented home (open question A8). Fixed this Cycle.
- ADRs referenced Cycle numbers ("tree created in Cycle 3"), which the Roadmap
  merge then invalidated — a reminder that forward cycle references are fragile.
- `architecture/index.md` still said "Cycle 2 is the tech-stack ADR", stale from
  Cycle 0. Fixed.

## Concrete edits (applied)

1. [`process/LOOP.md`](../LOOP.md) — Planning playbook now documents the
   **ADR-only Cycle** accommodation (resolves A8).
2. [`architecture/adr/0001..0003`](../../architecture/adr/) — MADR-lite format;
   runtime stack (TS/PixiJS/bitecs/Vue, ECS-as-source-of-truth, command port);
   test runners + 3-tier strategy + code layout.
3. [`architecture/tech-stack.md`](../../architecture/tech-stack.md) — filled and
   locked, each row links to its ADR.
4. [`architecture/open-questions.md`](../../architecture/open-questions.md) —
   G3 + A1–A8 resolved; "Still open" is now empty.
5. [`architecture/index.md`](../../architecture/index.md) — stale cycle note
   fixed.
6. [`spec/ROADMAP.md`](../../spec/ROADMAP.md) — **merged old Cycle 2 (Game design
   core) into the Vertical slice Cycle**; design is done slice-by-slice, concept
   diagrams live in `wiki/`. Renumbered: Cycle 2 = Empty project + module comms,
   Cycle 3 = Vertical slice. Updated forward references across ADRs and the
   handoff Feature.

## Deferred

- Concrete Vitest–Gherkin binding package (`@amiceli/vitest-cucumber` proposed)
  is confirmed when the first executable Feature lands (Cycle 2+).
- Wiring/init tests are a **Cycle 2** contract; Playwright `@e2e` journeys a
  **Cycle 3** contract.

## Loop advance

Cycle 1 closed. Next: **Cycle 2 — Empty project + module comms**, Phase
**research**. Build the buildable empty skeleton and wire modules; no game
features yet.
