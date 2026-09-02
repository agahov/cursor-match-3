---
name: run-loop-phase
description: Reads spec/FOCUS.md and dispatches to the skill for the current Phase (grill-research, new-feature, review-feature, or reflect-cycle). Use when continuing the game-dev loop, starting a session of loop work, or when the user asks to run a phase.
---

# Run loop phase

1. Read [`spec/FOCUS.md`](../../../spec/FOCUS.md). Stop if missing.
2. Dispatch on **Phase** (index: [`process/LOOP.md`](../../../process/LOOP.md)):
   - **research** → `grill-research`
   - **planning** → `grill-research` if questions remain, then `new-feature`
   - **implementation** → execute `spec/<slug>/tasks.md`; do not execute `type: code` rows that are `needs-spec`; when Tasks are done, `review-feature`; after **ready for Reflection** (and human confirm, unless the user asked to continue), set FOCUS Phase to **reflection**
   - **reflection** → `reflect-cycle`
3. Process terms: [`process/glossary.md`](../../../process/glossary.md). Game terms: [`wiki/glossary.md`](../../../wiki/glossary.md).
4. Update FOCUS **Next action** when the turn ends.
