---
name: new-feature
description: Scaffolds spec/<slug>/{spec.md,tasks.md,review.md} from project templates, plus tests/*.feature when the Feature has type:code tasks. Use when adding a Feature from the Roadmap or when the user asks to start a new feature.
---

# New feature

1. Confirm the Feature is on [`spec/ROADMAP.md`](../../../spec/ROADMAP.md) or the user named it.
2. Slug: lowercase hyphens. Never `feature_1`.
3. Copy [`spec/_templates/feature/`](../../../spec/_templates/feature/) to `spec/<slug>/`.
4. Fill `spec.md` (intent, links to wiki/architecture, status). List Tasks in the P8 schema (`ID`, `type`, `status`, `depends`, `item`). Reference research IDs; do not re-list them.
5. If any Task is `type: code`, write `tests/*.feature` **before** executing those Tasks. If none are, delete the copied `tests/` folder. ADR-only Features are `docs` tasks: no Gherkin, no source tree.
6. Leave `review.md` empty. If this is current Implementation work, point `spec/FOCUS.md` at it.
