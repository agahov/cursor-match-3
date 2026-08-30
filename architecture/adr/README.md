# Architecture decision records

One **ADR** per locked software choice (engine, language, test runner, folder layout for code).

## Format (A1)

We use **MADR-lite**: a trimmed [MADR](https://adr.github.io/madr/) with just the
sections we actually read. Full MADR is more ceremony than a solo/agent loop needs.

- File name: `NNNN-kebab-title.md`, zero-padded (`0001-…`). Numbers are permanent; never renumber.
- Status: `proposed` → `accepted` → `superseded by NNNN` (never delete a superseded ADR).
- Sections: **Context**, **Decision**, **Consequences**, **Alternatives** (optional).
- One decision per ADR. Split when a choice is separable.

### Template

```md
# NNNN. <title>

- **Status:** accepted
- **Date:** YYYY-MM-DD
- **Resolves:** <open-question IDs, e.g. G3, A4>

## Context

## Decision

## Consequences

## Alternatives
```

## Index

| ADR | Title | Status |
| --- | --- | --- |
| [0001](0001-adr-format-madr-lite.md) | ADR format: MADR-lite | accepted |
| [0002](0002-runtime-stack.md) | Runtime stack: TypeScript + PixiJS + bitecs + Vue | accepted |
| [0003](0003-test-runner-and-code-layout.md) | Test runner, test strategy, and code layout | accepted |
