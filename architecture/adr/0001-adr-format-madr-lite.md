# 0001. ADR format: MADR-lite

- **Status:** accepted
- **Date:** 2026-08-30
- **Resolves:** A1

## Context

Cycle 1 locks the tech stack through ADRs, so we need a format before writing
them. Full [MADR](https://adr.github.io/madr/) carries sections (decision
drivers, considered options with pros/cons per option, confirmation) that add
ceremony without much payoff in a small, agent-driven loop.

## Decision

Use **MADR-lite**: `NNNN-kebab-title.md`, one decision per file, with sections
**Context**, **Decision**, **Consequences**, and optional **Alternatives**.
Status flows `proposed → accepted → superseded by NNNN`. Numbers are permanent;
superseded ADRs stay on disk. The index and template live in
[`README.md`](README.md).

## Consequences

- Low friction to add a decision; the reader always sees why + what + fallout.
- No per-option scoring table; when a choice is close, capture the runners-up in
  **Alternatives** instead.
- If a future Cycle needs richer records, supersede this ADR rather than editing
  past ones.

## Alternatives

- **Full MADR** — richer, but more structure than this loop reads today.
- **Nygard one-pager** — close to what we chose; MADR-lite keeps the explicit
  status lifecycle we want for supersession.
