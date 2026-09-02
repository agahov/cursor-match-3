---
name: review-feature
description: Reviews a Feature against process/review-checklist.md for architecture fit, glossary, spec contract, and standards. Writes spec/<slug>/review.md and may update the checklist. Use when Implementation is done, or when the user asks for a feature review.
---

# Review feature

1. Identify `spec/<slug>/` from the user or from `spec/FOCUS.md`.
2. Read `spec.md`, `tasks.md`, [`process/review-checklist.md`](../../../process/review-checklist.md), and `tests/*.feature` if any `type: code` task exists.
3. Copy every checklist item into `spec/<slug>/review.md`. Mark pass/fail with evidence (paths, short quotes). Fail if a `type: code` row is still `needs-spec`.
4. If a gap is systematic (will apply to future Features), add an item to `process/review-checklist.md` and note that in the Review.
5. Verdict: **ready for Reflection** or **blockers** (list required fixes).
6. Do not close the Cycle from Review alone. Run `reflect-cycle` after the human confirms, or immediately when the user explicitly asks to reflect or close the Cycle.
