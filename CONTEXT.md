# Context

Glossary for the 2D game base. Terms only; no implementation details.

## Terms

**Kit**
The shared, game-agnostic base that 2D games are built from. Defined by features (render, movement, VFX, collision), not by any concrete game.

**Plugin**
A unit of Kit functionality made of systems and components. Games opt into Plugins.

**Core Plugin**
A Plugin every game needs. Always present in a game built on the Kit.

**Special Plugin**
An opt-in Plugin for features only some games need. A Special Plugin can be promoted to Core once enough games need it.

**System**
Logic that runs over entities that have a given set of components. Belongs to a Plugin.

**Component**
A piece of data attached to an entity. Belongs to a Plugin.

**Command**
A request from the UI to change the game ("do this"). The UI never changes game state directly; it sends Commands.

**Command Handler**
Receives a Command and turns it into component changes. The only path from a Command into the game state.

**Event**
A notice from the game that something happened ("this changed"). The UI reacts to Events and never reads game state directly.

**Event Bus**
The single channel that carries Commands into the game and Events out of it.

**Demo**
A small scene that shows one Kit feature working on its own, outside any game.

**Collision**
Detecting that shapes overlap, or that grid cells are occupied, and reporting it to the game. It never moves anything; the game decides the response.

## Constraints on the domain

- 2D only, with a fixed camera.
- No physics simulation. Collision exists, but without physics.
