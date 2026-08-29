---
name: new-feature
description: Scaffolds spec/<slug>/{spec.md,tests/*.feature,tasks.md,review.md} from project templates. Use when adding a Feature from the Roadmap or when the user asks to start a new feature.
---

# New feature

1. Confirm the Feature is on [`spec/ROADMAP.md`](../../../spec/ROADMAP.md) or the user named it.
2. Slug: lowercase hyphens. Never `feature_1`.
3. Copy [`spec/_templates/feature/`](../../../spec/_templates/feature/) to `spec/<slug>/`.
4. Fill `spec.md` (links to wiki/architecture). Write `tests/*.feature` **before** executable Tasks. Use both glossaries.
5. List Tasks that satisfy those scenarios. Leave `review.md` empty.
6. If this is current Implementation work, point `process/LOOP.md` at it.
