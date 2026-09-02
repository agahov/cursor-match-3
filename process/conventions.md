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
| P6 | Gherkin runner | **Deferred (A17).** Do not generate tests from Gherkin. Binding is a later iteration |
| P7 | Document ownership | **One owner per fact.** Other files may link to that owner; they must not copy the fact. `spec/FOCUS.md` is the only live pointer (Cycle, Phase, Feature, next action, and which wiki/architecture pages are in play). Wiki and architecture carry **status** plus **origin** (the Cycle that created them), never “we are in Cycle N” |
| P8 | Work-item schema | **One schema, two homes.** Columns: `ID`, `type`, `status`, `depends`, `item`. Types: `research`, `docs`, `structure`, `process`, `code`. Research home: `architecture/open-questions.md` (architecture) and `wiki/decisions.md` (game). Implementation home: `spec/<slug>/tasks.md` (P2) — tasks **reference** question IDs; they do not re-list them |
| P9 | Gherkin requirement | **Only `type: code` needs Gherkin.** A code item with no covering scenario in `spec/<slug>/tests/*.feature` is status **needs-spec** (blocks Implementation). Types `docs`, `structure`, `process`, and `research` do not get scenarios. How “tests pass” and A17 work is owned by `process/glossary.md` and P6; other files must not copy that paragraph |
| P10 | Operations catalog | **Skills own procedures.** `process/LOOP.md` is an index: Cycle + Phase order, then one line per Phase naming the skill. Playbook prose lives only in `.cursor/skills/`. `run-loop-phase` dispatches by reading FOCUS and running that skill |
| P11 | Distill | Skill `distill` finds copied policy and keeps only the owner (P7). `reflect-cycle` **always** runs it. Also runnable mid-cycle when redundancy shows up |

## Structure conventions

| ID | Topic | Convention |
| --- | --- | --- |
| S1 | Tasks template | `spec/_templates/feature/tasks.md` uses the P8 schema. Scaffold `tests/*.feature` only when the Feature has `type: code` tasks (P9) |
| S2 | Closed Feature records | `spec/<slug>/tasks.md` and `review.md` are **records** at close. Do not rewrite them for later process changes; add a one-line note if needed |
| S3 | Map vs rule | Folder **map lives in `AGENTS.md`**; `.cursor/rules/project-map.mdc` holds invariants only |
| S4 | Roadmap vs state | `spec/ROADMAP.md` is the **sequence** of Cycles; **live state is `spec/FOCUS.md`** |
| S5 | Cursor Automation | **Draft only** (`automation-draft.md`); create it when the user asks |
| S6 | `.gitignore` | Present (OS, env, common build dirs) |
| S7 | Entry files | `wiki/index.md`, `architecture/index.md`, `spec/ROADMAP.md`; loop **index** in `process/LOOP.md`, procedures in `.cursor/skills/`, state in `spec/FOCUS.md` |
