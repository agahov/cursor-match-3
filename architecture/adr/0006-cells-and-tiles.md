# 0006. Cells and tiles as two entity kinds

- **Status:** accepted
- **Date:** 2026-09-02
- **Resolves:** A18

## Context

Feature 1 (`empty-board`) must render an 8×8 grid of empty **cells** with no
**tiles** (G8). Feature 2 must spawn tiles on the top line and let them fall,
and later clears must reuse that gravity path without destroying the grid (G9).
ADR 0004 left concrete component sets to Cycle 3.

## Decision

**Two entity kinds.**

- A **cell** is a grid-slot entity: marker tag `Cell` plus integer `col` and
  `row`. Feature 1 creates exactly `BOARD_COLS × BOARD_ROWS` cells (8×8).
- A **tile** is a separate occupant entity: marker tag `Tile` plus `col`,
  `row`, and `kind`. Feature 1 creates **none**. Feature 2 spawns them on the
  top line; gravity updates the tile’s `row`.
- Occupancy is a **coordinate match**: a cell at `(col, row)` is occupied when
  a tile has the same `(col, row)`. Cells are not destroyed when tiles clear.
- Components are data-only (ADR 0002). Rule systems write `Cell`/`Tile`
  components; the render system only reads them (ADR 0004).

Board size lives as named constants in `src/domain/` (`BOARD_COLS`,
`BOARD_ROWS`), not as magic numbers in adapters.

**Commands for Feature 1.** `resetBoard` rebuilds the cell grid (destroys
existing cells and tiles, then creates 64 empty cells). The engine also
creates that grid at boot so the first frame is not empty. The skeleton
`ping` command is removed.

**HUD projection for Feature 1.** Immutable snapshot: `step`, `cols`, `rows`,
`cellCount`, `tileCount`. The board is drawn by the render system from cell
entities, not from this snapshot.

## Consequences

- Feature 1 can ship a visible empty board without tile code.
- Feature 2 adds tile entities and a gravity system; it does not replace the
  grid.
- Tests can assert `cellCount === 64` and `tileCount === 0` without Pixi.
- bitecs holds no object references; the Pixi `entity → DisplayObject` map
  stays in the render adapter (ADR 0004).

## Alternatives

- **Kind-on-cell** — one entity per slot with an optional kind. Simpler
  Feature 1; falling becomes copying kind between cells, which fights “appear
  on the top line and fall.” Rejected in Research.
