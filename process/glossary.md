# Process glossary

Canonical names for **how we work**. Game terms live in [`../wiki/glossary.md`](../wiki/glossary.md). Do not mix the two.

Prefer these terms; aliases in the last column are not used in specs, skills, or reviews.

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Roadmap** | High-level sequence of Cycles describing how we see the project | Plan, backlog, timeline |
| **Cycle** | One pass through Research, Planning, Implementation, and Reflection | Sprint, iteration |
| **Phase** | One of the four stages inside a Cycle | Step, stage (when meaning a loop stage) |
| **Feature** | A named slice of work under `spec/<slug>/` with `spec.md`, `tasks.md`, and `review.md` | Ticket, epic, story |
| **Gherkin spec** | Acceptance scenarios in `spec/<slug>/tests/*.feature` covering `type: code` Tasks (P9) | Tests (when meaning the `.feature` files), BDD |
| **Task** | A work item in `spec/<slug>/tasks.md` using the P8 schema | Ticket, todo (when meaning a Feature task) |
| **Review** | Architecture and standards check after Implementation, written to `spec/<slug>/review.md` | Code review, QA |
| **ADR** | An architecture decision record under `architecture/adr/` | Design doc (when meaning a locked software choice) |

## Relationships

- A **Roadmap** orders **Cycles**.
- A **Cycle** contains four **Phases**.
- **Planning** produces or updates a **Feature**.
- A **Feature** has many **Tasks**. It has a **Gherkin spec** only if some Tasks are `type: code` (P9).
- **Implementation** ends with a **Review**, then **FOCUS.md** is set to Reflection.
- **Reflection** may change process files, rules, and skills; it does not add game Features.

## Flagged ambiguities

- **Tests** — two layers until **A17**. The **Gherkin spec** is the contract for `type: code` Tasks, authored in Planning; it is **not executed** and we do **not** generate test files from it. “Tests pass” means: scenarios are complete, terms match both glossaries, **and** matching **hand-written Vitest** (wiring/rules) is green. Binding `.feature` files to Vitest steps is deferred (A17). Playwright `@e2e` is a later-slice contract.
- **Workflow** — the documented loop in `process/`. Not GitHub Actions. Not a Cursor Automation (name those explicitly).
- **Glossary** — two files on purpose: this file (process) and `wiki/glossary.md` (game).
- **Closed Feature records** — `spec/<slug>/tasks.md` and `review.md` after close are a snapshot. Do not rewrite them to match later process changes; put a one-line note if needed.
