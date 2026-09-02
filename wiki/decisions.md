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
