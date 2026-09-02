---
name: distill
description: Finds copied policy and keeps only the owner (P7). Use during Reflection (reflect-cycle always runs it), when docs repeat cycle/Gherkin/tests-pass policy, or when the user asks to distill, cut duplication, or simplify process docs.
---

# Distill

1. For each restated fact, name the **owner** (P7). Keep that file. Delete copies.
   A **pointer** to the owner is allowed. An **echo** of its content is not.
2. Do not rewrite closed Feature `tasks.md` or `review.md` (S2). If those files
   would be copied as current policy, add a one-line note on that Feature’s
   `spec.md` instead.
3. Owners:
   - Live Cycle, Phase, Feature, next action, pages in play → `spec/FOCUS.md`
   - Cycle sequence → `spec/ROADMAP.md`
   - Process terms and “tests pass” → `process/glossary.md`
   - Method defaults → `process/conventions.md` (P6 owns the runner deferral)
   - Deferred executable-Gherkin work item → `architecture/open-questions.md` A17
   - Procedures → `.cursor/skills/`
   - Phase order → `process/LOOP.md` (index only)
4. Report kept vs deleted.
