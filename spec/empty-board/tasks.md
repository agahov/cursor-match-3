# Tasks: empty-board

| ID | Type | Status | Depends | Item |
| --- | --- | --- | --- | --- |
| T1 | docs | done | A18 | ADR 0006 — cells vs tiles as two entity kinds |
| T2 | code | draft | T1, G8 | `BOARD_COLS`/`BOARD_ROWS` in `src/domain/`; `Cell` + `col`/`row` components; boot creates 64 cell entities |
| T3 | code | draft | T2 | `resetBoard` command replaces `ping`; reset destroys cells/tiles then recreates 64 empty cells |
| T4 | code | draft | T3 | HUD projection: `step`, `cols`, `rows`, `cellCount`, `tileCount` (no `pingCount`) |
| T5 | code | draft | T2 | Render system draws one slot per cell (empty placeholder chrome); 0 tile sprites |
| T6 | code | draft | T4 | Vue HUD shows 8×8 and cell/tile counts; Reset dispatches `resetBoard` |
| T7 | code | draft | T3 | Deterministic Vitest: boot and reset yield 64 cells and 0 tiles |
| T8 | code | draft | T4, T5, T6 | Update wiring/init smoke for the new command and 64 cell display objects |
