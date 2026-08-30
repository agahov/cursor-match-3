# Game design decisions

Locked decisions about **this game** (the Match-3 fixture). Game terms live in
[`glossary.md`](glossary.md). Method and process conventions live in
[`../process/`](../process/), not here. Engine and rendering choices are tracked
in [`../architecture/open-questions.md`](../architecture/open-questions.md).

| ID | Question | Decision |
| --- | --- | --- |
| G1 | What game is in this repo? | **Match-3** as the fixture to test the workflow, not as the product |
| G2 | Platform? | **Web**, confirmed for the workflow fixture |
| G4 | First playable scope? | **Confirmed boundary:** [`concepts/match-3-core.md`](concepts/match-3-core.md) covers one local board, legal swaps, match resolution, cascades, score, moves, win/lose |
| G5 | Art: original vs placeholders? | **Rounded-square placeholders**, with a distinct symbol or shape as well as color; original art is deferred |
| G6 | Single-player only? | **Local single-player only**; no accounts or network dependency |
