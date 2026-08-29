# Tasks: bootstrap-workflow

Gherkin walkthrough (cycle 0 meaning of “tests pass”):

- [x] Scenarios are complete and unambiguous
- [x] Terms match `wiki/glossary.md`
- [x] Each scenario can be walked against the repo

## Implementation

- [x] T1: Create wiki/, architecture/, spec/, process/ with indexes
- [x] T2: Seed wiki/glossary.md with process terms only
- [x] T3: Write spec/ROADMAP.md and process/LOOP.md, phases.md, OPEN_QUESTIONS.md
- [x] T4: Add project-map and spec-contract rules
- [x] T5: Add run-loop-phase, new-feature, review-feature, reflect-cycle skills
- [x] T6: Add spec/_templates/feature/ and process/review-checklist.md
- [x] T7: Write this Feature’s spec.md, tests/*.feature, tasks.md, review.md template
- [x] T8: Walk OPEN_QUESTIONS.md and lock process defaults P1–P6
- [x] T9: Run review-feature; human confirms (explicit ask to complete reflect-cycle)
- [x] T10: Run reflect-cycle; apply listed process patches
- [x] T11: Optional sessionStart hook pointing at LOOP.md
- [x] T12: Draft light Cursor Automation in process/automation-draft.md (create in editor after first commit)

Cycle 1 correction: process terms moved to `process/glossary.md`. `wiki/glossary.md` is game-only.

## Walkthrough

- [x] session-map.feature matches files on disk
- [x] gherkin-before-tasks.feature matches rules and new-feature skill
- [x] review-and-reflect.feature matches skills, review.md, cycle-0.md, and LOOP.md advance
