# The loop

Abstract Cycle + Phase order. Live state: [`../spec/FOCUS.md`](../spec/FOCUS.md).
Procedures: [`.cursor/skills/`](../.cursor/skills/).

A project moves through **Cycles**. Each Cycle runs four **Phases** in order:
Research → Planning → Implementation → Reflection.

```mermaid
flowchart TD
  kickoff[Session_or_automation] --> readFocus[Read_FOCUS.md]
  readFocus --> phase{Current_Phase}
  phase --> research[Research]
  phase --> planning[Planning]
  phase --> implementation[Implementation]
  phase --> reflection[Reflection]
  research --> planning
  planning --> implementation
  implementation --> review[review-feature]
  review --> setPhase[Set_FOCUS_to_Reflection]
  setPhase --> reflection
  reflection --> nextResearch[Next_cycle_Research]
```

## How to run it

Read FOCUS. Dispatch with `run-loop-phase` (P10). Reflection is a required
Phase; it runs when FOCUS says **reflection**, or when the user asks to reflect
or close the Cycle.

| Phase | Skill |
| --- | --- |
| Research | `grill-research` |
| Planning | `new-feature` (run `grill-research` first if questions remain) |
| Implementation | execute `spec/<slug>/tasks.md`; then `review-feature` |
| Reflection | `reflect-cycle` (always runs `distill`) |

Terms: [`glossary.md`](glossary.md). Conventions: [`conventions.md`](conventions.md).
Game terms: [`../wiki/glossary.md`](../wiki/glossary.md).
