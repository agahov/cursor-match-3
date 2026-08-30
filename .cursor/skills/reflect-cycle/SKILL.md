---
name: reflect-cycle
description: Writes a reflection note and proposes concrete edits to rules, skills, and templates. Use during the Reflection Phase, after Review sign-off, for a mid-cycle process Reflection, or when the user asks to reflect or close a cycle.
---

# Reflect cycle

1. Read `spec/FOCUS.md`, the Feature `review.md` if any, and the open questions in [`wiki/decisions.md`](../../../wiki/decisions.md) and [`architecture/open-questions.md`](../../../architecture/open-questions.md).
2. Decide **close Cycle** vs **mid-cycle process only**. Close only when the Cycle’s work is done (or the user explicitly wants to close it). Mid-cycle if the user asks to reflect on process findings while the Cycle continues.
3. Write `process/reflections/cycle-N.md` (close) or `process/reflections/cycle-N-process.md` (mid-cycle): what worked, what hurt, **concrete edits** (path + change), deferred questions.
4. Apply those edits in this Phase (or wait if the user wants to approve first). Method-convention changes go in `process/conventions.md`.
5. If **closing** the Cycle: set `spec/FOCUS.md` to the next Cycle, Phase **research**. If **mid-cycle**: keep Cycle and Phase; update **Next action** only.
