# Context

Glossary for the 2D game base. Terms only; no implementation details.

## Terms

**Kit**
The shared, game-agnostic base that 2D games are built from. Defined by features (render, movement, VFX, collision), not by any concrete game.

**Plugin**
A unit of Kit functionality made of systems and components. Games opt into Plugins.

**System**
Logic that runs over entities that have a given set of components. Belongs to a Plugin.

**Component**
A piece of data attached to an entity. Belongs to a Plugin.

## Constraints on the domain

- 2D only, with a fixed camera.
- No physics simulation. Collision exists, but without physics.
