# Process glossary

Canonical names for **how we work**. Game terms live in [`../wiki/glossary.md`](../wiki/glossary.md). Do not mix the two.

Prefer these terms; aliases in the last column are not used in specs, skills, or reviews.

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Roadmap** | High-level sequence of Cycles describing how we see the project | Plan, backlog, timeline |
| **Cycle** | One pass through Research, Planning, Implementation, and Reflection | Sprint, iteration |
| **Phase** | One of the four stages inside a Cycle | Step, stage (when meaning a loop stage) |
| **Feature** | A named slice of work under `spec/<slug>/` with spec, Gherkin, and tasks | Ticket, epic, story |
| **Gherkin spec** | Acceptance scenarios in `spec/<slug>/tests/*.feature` that a Feature must satisfy | Tests (when meaning the `.feature` files), BDD |
| **Task** | A concrete implementation item in `spec/<slug>/tasks.md` | Ticket, todo (when meaning a Feature task) |
| **Review** | Architecture and standards check after Gherkin walkthrough, written to `spec/<slug>/review.md` | Code review, QA |
| **ADR** | An architecture decision record under `architecture/adr/` | Design doc (when meaning a locked software choice) |

## Relationships

- A **Roadmap** orders **Cycles**.
- A **Cycle** contains four **Phases**.
- **Planning** produces or updates a **Feature**.
- A **Feature** has one **Gherkin spec** (one or more `.feature` files) and many **Tasks**.
- **Implementation** ends with a **Review**, then **LOOP.md** is set to Reflection.
- **Reflection** may change process files, rules, and skills; it does not add game Features.

## Flagged ambiguities

- **Tests** — until a test runner exists, “tests pass” means the **Gherkin spec** is complete, terms match both glossaries, and the walkthrough in `tasks.md` is done. Runnable harness is an **ADR** in a later Cycle.
- **Workflow** — the documented loop in `process/`. Not GitHub Actions. Not a Cursor Automation (name those explicitly).
- **Glossary** — two files on purpose: this file (process) and `wiki/glossary.md` (game).
