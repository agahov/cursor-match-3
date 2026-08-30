---
name: run-loop-phase
description: Reads spec/FOCUS.md for the current Phase and executes only that Phase's playbook from process/LOOP.md (research, planning, implementation, or reflection). Use when continuing the game-dev loop, starting a session of loop work, or when the user asks to run a phase.
---

# Run loop phase

1. Read [`spec/FOCUS.md`](../../../spec/FOCUS.md) for the current Cycle and Phase. Stop if missing.
2. Follow only that Phase's playbook in [`process/LOOP.md`](../../../process/LOOP.md).
3. Process terms: [`process/glossary.md`](../../../process/glossary.md). Game terms: [`wiki/glossary.md`](../../../wiki/glossary.md).
4. Implementation → `review-feature` when Tasks are done, then set `spec/FOCUS.md` to Reflection.
5. Reflection → `reflect-cycle`.
6. Update `spec/FOCUS.md` **Next action** when the turn ends.
