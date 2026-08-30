---
name: grill-research
description: Interactive, one-question-at-a-time grilling for the Research (or Planning) Phase. Surfaces open questions, asks them one at a time each with a recommended answer, explores the repo instead of asking when the answer already exists, and records each resolution in architecture/open-questions.md or wiki/decisions.md. Use when resolving open questions interactively during Research, or when the user asks to be grilled on a design.
---

# Grill research

A Research/Planning variation of the `grill-me` skill: resolve open questions
**interactively**, one at a time, instead of writing a wall of questions.

1. Gather the questions: open rows in
   [`architecture/open-questions.md`](../../../architecture/open-questions.md)
   (architecture) and [`wiki/decisions.md`](../../../wiki/decisions.md) (game),
   plus gaps found scanning `wiki/`, the latest `process/reflections/`, and the
   ADRs.
2. Order them into a decision tree so **dependencies come first** — a choice
   that shapes others is asked before them.
3. Grill **one question at a time**:
   - If the repo, wiki, architecture, or an ADR already answers it, explore and
     answer it yourself — do not ask.
   - Otherwise ask a single, sharp question and **give your recommended answer**
     with a one-line rationale and the main alternative.
   - Wait for the reply before the next question. Walk each branch to closure.
4. Record as you go — never lock silently:
   - Architecture answers → a row/update in `architecture/open-questions.md`
     (mark **proposed** vs resolved-by-ADR).
   - Game answers → `wiki/decisions.md`; new game terms → `wiki/glossary.md`.
   - Keep directions **proposed** until Planning locks them in an ADR.
5. Do not edit rules, skills, or method files here — that is Reflection (P5) —
   unless the user explicitly asks.
6. Stop when the questions are resolved or the user defers; update
   [`spec/FOCUS.md`](../../../spec/FOCUS.md) **Next action** with what remains
   for Planning.
