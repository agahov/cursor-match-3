# Game design decisions

**Status:** locked  
**Origin:** Cycle 1

Locked decisions about **this game** (the Match-3 fixture). Game terms live in
[`glossary.md`](glossary.md). Method conventions live in [`../process/`](../process/).
Engine choices: [`../architecture/open-questions.md`](../architecture/open-questions.md).

New rows use the P8 schema.

| ID | Type | Status | Depends | Question | Item |
| --- | --- | --- | --- | --- | --- |
| G1 | research | locked | | What game is in this repo? | **Match-3** as the fixture to test the workflow, not as the product |
| G2 | research | locked | | Platform? | **Web**, confirmed for the workflow fixture |
| G4 | research | locked | G1 | First playable scope? | **Confirmed boundary:** [`concepts/match-3-core.md`](concepts/match-3-core.md) covers one local board, legal swaps, match resolution, cascades, score, moves, win/lose |
| G5 | research | locked | | Art: original vs placeholders? | **Rounded-square placeholders**, with a distinct symbol or shape as well as color; original art is deferred |
| G6 | research | locked | | Single-player only? | **Local single-player only**; no accounts or network dependency |
| G7 | research | locked | G4 | How small are Cycle 3 Features? | **Thinner than G4.** G4 stays the Cycle playable boundary, not one Feature. First Features: (1) init board with empty cells; (2) spawn tiles that appear and fall (gravity/refill — reused after later clears). Match, swap, score, and win/lose come after. |
| G8 | research | locked | G7 | Feature 1 boundary? | **Rendered 8×8 empty cells.** Start/reset rebuilds the grid. No tiles, spawn, gravity, or selection. Board size is the match-3-core starting point, tunable later. Feature: `spec/empty-board/`. |
| G9 | research | proposed | G8 | Feature 2 boundary? | **Tiles appear on the top line and fall down.** Start/reset fills the 8×8 by repeating that until every cell is occupied. Same path later for refill after clears. Six placeholder kinds (G5). No match detection. |
