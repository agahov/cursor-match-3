# Review checklist

Living list. The `review-feature` skill walks it and may add items when a Review finds a gap.

Copy the items into `spec/<slug>/review.md` and mark each one.

## Architecture

- [ ] Change fits the current **ADR**s and `architecture/tech-stack.md` (or is process-only and does not imply a stack)
- [ ] No new engine, library, or top-level folder unless an **ADR** or Reflection said so

## Spec contract

- [ ] Feature folder is `spec/<slug>/` (slug, not `feature_N`)
- [ ] `spec.md`, `tests/*.feature`, `tasks.md`, and `review.md` exist
- [ ] **Gherkin spec** existed before implementation Tasks were executed
- [ ] Terms match `process/glossary.md` (process) and `wiki/glossary.md` (game)

## Standards

- [ ] Rules in `.cursor/rules/` stay short (one concern, examples if needed)
- [ ] Skills stay procedural; playbooks were not copied into always-on rules
- [ ] No extra docs that duplicate `AGENTS.md`, the Roadmap, or the glossary

## Process

- [ ] `process/LOOP.md` still names this Feature until Review is signed off
- [ ] Blocking `OPEN_QUESTIONS.md` items for this Cycle are locked (or none apply)
- [ ] Checklist updates (if any) are written back to this file
