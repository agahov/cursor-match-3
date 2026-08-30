# Cursor Automation draft

Create this **after** the process files are committed. Do not point the automation at untracked paths.

Do not treat this file as a GitHub Action. It is a reminder kickoff; the `run-loop-phase` skill still does the work.

| Field | Value |
| --- | --- |
| Name | Continue game-dev loop |
| Description | Scheduled kickoff that continues the current Cycle Phase. It does not replace in-session skills. |
| Trigger | Schedule. Pick daily or weekly in the Automations editor. |
| Tools | Cloud agent on this repo |
| Instructions | Read `spec/FOCUS.md` and follow the `run-loop-phase` skill. Do only the named Phase. Process terms: `process/glossary.md`. Game terms: `wiki/glossary.md`. If the Phase is Reflection, run `reflect-cycle`. Honor any **Do not** lines in `FOCUS.md`. Update `spec/FOCUS.md` next action when the turn ends. |
| To finish in editor | Cadence, repo, and branch. Save only after the referenced files exist on that branch. |
