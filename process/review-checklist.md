# Review checklist

Living list. The `review-feature` skill walks it and may add items when a Review finds a gap.

Copy the items into `spec/<slug>/review.md` and mark each one.

## Architecture

- [ ] Change fits the current **ADR**s and `architecture/tech-stack.md` (or is process-only and does not imply a stack)
- [ ] No new engine, library, or top-level folder unless an **ADR** or Reflection said so
- [ ] New runtime/dev **dependencies** trace to an **ADR** (or are flagged for the next Reflection)

## Spec contract

- [ ] Feature folder is `spec/<slug>/` (slug, not `feature_N`)
- [ ] `spec.md`, `tasks.md`, and `review.md` exist
- [ ] Tasks use the P8 schema; they reference research IDs instead of re-listing them
- [ ] If any Task is `type: code`: `tests/*.feature` existed before those Tasks were executed, and no code row is `needs-spec`
- [ ] If no Task is `type: code`: no `.feature` files (docs/structure/process Feature)
- [ ] Terms match `process/glossary.md` (process) and `wiki/glossary.md` (game)

## Standards

- [ ] Rules in `.cursor/rules/` stay short (one concern, examples if needed)
- [ ] Skills stay procedural; `process/LOOP.md` remains an index (P10)
- [ ] No extra docs that duplicate `AGENTS.md`, the Roadmap, or the glossary (P7)

## Process

- [ ] `spec/FOCUS.md` still names this Feature until Review is signed off
- [ ] Blocking open questions for this Cycle (`wiki/decisions.md`, `architecture/open-questions.md`) are locked (or none apply)
- [ ] Checklist updates (if any) are written back to this file
