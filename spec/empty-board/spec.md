# Feature: empty-board

**Status:** planning

## Intent

Stand up a visible 8×8 **board** of empty **cells** (G8). No **tiles**, spawn,
gravity, or selection. Start and reset rebuild the cell grid. Cells and tiles
are different entity kinds (A18 / ADR 0006); this Feature creates only cells.

## Links

- Wiki: [`concepts/match-3-core.md`](../../wiki/concepts/match-3-core.md) (G4),
  [`decisions.md`](../../wiki/decisions.md) (G7, G8)
- Architecture: [ADR 0006](../../architecture/adr/0006-cells-and-tiles.md),
  [ADR 0004](../../architecture/adr/0004-module-communication-contract.md)
- Roadmap cycle: 3
