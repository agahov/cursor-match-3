# Package boundaries and import rules

Type: grilling
Status: open
Blocked by: none

## Question

What exactly belongs in each of `core`, `render`, `domain` and `ui`, and which package may import which? Decide where components are defined (for example the Render component), where the ECS world is created and owned, where the Event Bus types live, and how the app wires the packages together at startup, while keeping coupling low.
