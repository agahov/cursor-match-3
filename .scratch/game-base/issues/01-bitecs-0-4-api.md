# bitECS 0.4 API facts for the skeleton

Type: research
Status: resolved
Blocked by: none

## Question

Which bitECS 0.4.0 APIs does the Kit skeleton need, and how do they work? Cover: creating a world, defining components (SoA vs AoS and how data is stored), adding and removing entities and components, queries, detecting added and removed entities (observers or the 0.4 equivalent of enter/exit queries), and anything that changed from 0.3 that online examples get wrong. Use the installed package in `node_modules/bitecs` and its official docs as primary sources.

## Answer

See [research/bitecs-0-4-api.md](../research/bitecs-0-4-api.md). Gist: components are plain objects or arrays indexed by entity id; argument order is `(world, eid, component)`; `query(world, [A, Not(B)])` runs inline; `observe(world, onAdd/onRemove(...), cb)` replaces enter/exit queries and fires synchronously, only for future changes, so queue ids and drain them in a system; entity ids are recycled without clearing data.
