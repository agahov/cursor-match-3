# Method conventions

Locked defaults for **how we work** in this repo. These are part of the
abstract method, not project state (state is [`../spec/FOCUS.md`](../spec/FOCUS.md)).
Change them only in a Reflection, or when the user explicitly asks.

Project-specific open questions do not live here: game decisions are in
[`../wiki/decisions.md`](../wiki/decisions.md); architecture and engine
questions are in [`../architecture/open-questions.md`](../architecture/open-questions.md).

## Process conventions

| ID | Topic | Convention |
| --- | --- | --- |
| P1 | Feature IDs | **Slugs**, not numbers (never `feature_1`) |
| P2 | Task tracking | **Markdown** in `spec/<slug>/tasks.md` until we outgrow it |
| P3 | Review sign-off | **Agent fills** `review.md`; **human confirms** |
| P4 | Wiki format | **Markdown + Mermaid** default; interactive HTML only under `wiki/concepts/<name>/` |
| P5 | Editing rules/skills | **Only in Reflection**, or when the user explicitly asks |
| P6 | Gherkin runner | **Deferred** until the tech-stack **ADR** |

## Structure conventions

| ID | Topic | Convention |
| --- | --- | --- |
| S1 | Tasks template | Gherkin walkthrough is included in `spec/_templates/feature/tasks.md` |
| S2 | Closed Feature records | `spec/<slug>/tasks.md` and `review.md` are **records** at close. Do not rewrite them for later process changes; add a one-line note if needed |
| S3 | Map vs rule | Folder **map lives in `AGENTS.md`**; `.cursor/rules/project-map.mdc` holds invariants only |
| S4 | Roadmap vs state | `spec/ROADMAP.md` is the **sequence** of Cycles; **live state is `spec/FOCUS.md`** |
| S5 | Cursor Automation | **Draft only** (`automation-draft.md`); create it when the user asks |
| S6 | `.gitignore` | Present (OS, env, common build dirs) |
| S7 | Entry files | `wiki/index.md`, `architecture/index.md`, `spec/ROADMAP.md`; loop in `process/LOOP.md`, state in `spec/FOCUS.md` |
