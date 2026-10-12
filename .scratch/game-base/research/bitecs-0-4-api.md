# bitECS 0.4.0 API facts for the Kit skeleton

Resolves: `.scratch/game-base/issues/01-bitecs-0-4-api.md`

Primary source: the installed package `node_modules/bitecs` (`package.json` says `"version": "0.4.0"`). Paths below are relative to `node_modules/bitecs/`. Line numbers in `dist/core/index.mjs` refer to the unminified ESM build that ships with the package. Signatures were checked against `dist/core/*.d.ts`. I did not need any web sources.

## TL;DR

- A component is any JS object or array you own. bitECS only uses it as an identity key and never allocates or clears its storage.
- Argument order is `(world, eid, component)` everywhere. 0.3 used `(world, component, eid)`.
- `query(world, [A, Not(B)])` runs directly, with no `defineQuery`. Removals are deferred, so calling `removeEntity` inside a query loop is safe.
- Use `observe(world, onAdd(...)/onRemove(...), cb)` to detect added and removed entities. This replaces `enterQuery`/`exitQuery`. The callbacks run synchronously and **only for future changes**, so register them before spawning anything.
- Entity ids are recycled, with versioning off by default. Component data is not reset, so systems must initialise every field when they spawn an entity.

## 1. World + custom context

`createWorld` takes an optional context object and/or an `EntityIndex`, in any order. The context object **becomes** the world: bitECS attaches its internals under a hidden symbol property, so your fields stay typed and directly accessible.

- Types: `dist/core/World.d.ts`: `createWorld<T extends object = {}>(...args: Array<EntityIndex | T>): World<T>`, where `World<T> = { [K in keyof T]: T[K] }`.
- Runtime: `dist/core/index.mjs` L80–108. `createBaseWorld` calls `defineHiddenProperty(context || {}, $internal, {...})`, and an argument counts as an `EntityIndex` only if it has `dense`, `sparse` and `aliveCount`.
- README example: `README.md` L67–83, with `components` and `time` placed on the world.

```ts
import { createWorld, createEntityIndex, withVersioning } from 'bitecs'

type KitContext = {
  time: { delta: number; elapsed: number }
  components: typeof components
}

const components = { Position: { x: [] as number[], y: [] as number[] } }

const world = createWorld<KitContext>({ time: { delta: 0, elapsed: 0 }, components })
world.time.delta = 16 // typed

// Optional: versioned ids, to catch stale-id bugs (see §3)
const world2 = createWorld<KitContext>(createEntityIndex(withVersioning(8)), { time: { delta: 0, elapsed: 0 }, components })
```

Other world functions: `resetWorld`, `deleteWorld`, `getAllEntities`, `getWorldComponents` (`World.d.ts`).

## 2. Components: what they are, SoA vs AoS, read/write

In 0.4 the `ComponentRef` type is `any` (`dist/core/Component.d.ts`). The first time a reference is used, bitECS registers it in a `Map` keyed by object identity (`index.mjs` L809–831) and gives it a bitflag. That bitflag is the only state bitECS keeps for the component. Storage is whatever object you pass in, and you index it by entity id yourself.

Supported shapes (`docs/MIGRATION_GUIDE_0.4.0.md` §1; `README.md` L64–99):

| Shape | Definition | Read/write |
|---|---|---|
| SoA, plain arrays (the guide says these are best for memory) | `{ x: [] as number[], y: [] as number[] }` | `Position.x[eid] = 1` |
| SoA, typed arrays (fixed capacity, you preallocate) | `{ x: new Float32Array(N), y: new Float32Array(N) }` | `Position.x[eid] = 1` |
| AoS | `[] as { x: number; y: number }[]` | `Player[eid] = { x, y }` / `Player[eid].x` |
| Single value | `[] as number[]` | `Health[eid] = 100` |
| Tag | `{}` | presence only |

`soa(spec)` and `aos<T>(spec?)` exist as identity/typing helpers (`dist/core/utils/soa.d.ts`, `index.mjs` L1061–1066). `soa` returns its input unchanged, and `aos` returns an array with `spec` merged in.

```ts
const Position = { x: [] as number[], y: [] as number[] }        // SoA
const Velocity = { x: new Float32Array(10_000), y: new Float32Array(10_000) }
const Renderable = [] as { texture: string; layer: number }[]    // AoS
const Selected = {}                                              // tag

Position.x[eid] += Velocity.x[eid] * world.time.delta
```

There is an optional object-style initialiser: `addComponent(world, eid, set(Position, { x: 1, y: 2 }))`. It **does nothing unless you register an `onSet` observer** that copies the data (`MIGRATION_GUIDE` L80–130; `index.mjs` L880–907, where `set` only calls `setObservable.notify`). `getComponent` works the same way with `onGet`.

```ts
observe(world, onSet(Position), (eid, d: { x: number; y: number }) => {
  Position.x[eid] = d.x
  Position.y[eid] = d.y
})
```

## 3. Entities and components (argument order: world, eid, component)

From `dist/core/Entity.d.ts` and `dist/core/Component.d.ts`:

```ts
addEntity(world): EntityId                       // also addEntity(world, ...components)
removeEntity(world, eid): void
entityExists(world, eid): boolean
addComponent(world, eid, Comp | set(Comp, data)): boolean   // false if already present
addComponents(world, eid, ...comps) / addComponents(world, eid, [comps])
removeComponent(world, eid, ...comps): void      // variadic; removeComponents is an alias
hasComponent(world, eid, Comp): boolean
getEntityComponents(world, eid): ComponentRef[]
```

```ts
const eid = addEntity(world)
addComponents(world, eid, Position, Renderable)
Position.x[eid] = 0; Position.y[eid] = 0
if (hasComponent(world, eid, Selected)) removeComponent(world, eid, Selected)
removeEntity(world, eid)
```

Gotchas, verified in source:
- `addComponent` and `removeComponent` **throw** if the entity doesn't exist (`index.mjs` L881–883, L943–945). `removeEntity` on a dead id is a no-op (L998).
- **Ids are recycled.** `addEntityId` reuses ids from the dense array (L41–47), and versioning is off by default (L21–24). bitECS never clears component arrays, so a recycled id still holds the old entity's values. Set every field when spawning. Use `withVersioning()` if you keep entity ids across frames.

## 4. Queries and operators

`query(world, terms, ...modifiers): QueryResult`. The result is `readonly EntityId[]`, or a `Uint32Array` when you pass `asBuffer` (`Query.d.ts`). A query is registered and cached by hash the first time it runs (`index.mjs` L711–721), so you can call it inline every frame.

Operators exported from `index.d.ts`: `Not`, `Or`, `And`, plus the aliases `None = Not`, `Any = Or`, `All = And` (`index.mjs` L593–598). Modifiers: `asBuffer`, `isNested`/`noCommit`, or `{ buffered, commit }`. There are also `Hierarchy(rel)`/`Cascade(rel)` terms for relations.

```ts
import { query, Not, Or } from 'bitecs'

for (const eid of query(world, [Position, Renderable, Not(Selected)])) { /* ... */ }
const clickable = query(world, [Or(Button, Tile)])
```

Notes:
- Only a single level of `Not`/`Or`/`And` is supported. Nesting operators throws `Nested combinator ... not supported yet` (`index.mjs` L661–667).
- Removals are deferred. `queryRemoveEntity` adds the entity to a `toRemove` set instead of splicing it out (L790–797), and `query()` commits pending removals at the start of its next call (L742, L784–789). As a result, calling `removeEntity` or `removeComponent` while iterating a query result is safe.
- `Changed()` no longer exists. Use observers or your own dirty flags (`MIGRATION_GUIDE` §3).

## 5. Detecting added/removed entities (replaces enterQuery/exitQuery)

`observe(world, hook, cb): () => void` returns an unsubscribe function (`Query.d.ts`; `index.mjs` L617–630). The hooks are:
- `onAdd(...terms)` and `onRemove(...terms)` take query terms (operators allowed) and fire when an entity **enters or leaves the matching query**. They are backed by `query.addObservable`/`removeObservable`.
- `onSet(Comp)` and `onGet(Comp)` take a single component each and fire on `set(...)`/`setComponent` and on `getComponent`.

Timing semantics (all verified in `index.mjs`):
- **Callbacks are synchronous.** `onAdd` fires inside `addComponent` for whichever component completes the match (L897–902). This happens *before* the code after `addComponent` writes values like `Position.x[eid]`. When `set(...)` is used, it happens before `onSet` too (L905–907). So don't read component data inside an `onAdd` callback; queue the id instead.
- **`onRemove` fires before the data is gone.** `removeEntity` notifies the queries (L1037–1039) before it frees the id and clears the masks (L1040–1044). Component arrays are never cleared anyway.
- **Existing entities are not replayed.** `observe` registers the query (L621), and `registerQuery` adds entities that already match (L700–708). That happens before the callback is subscribed, so already-matching entities never reach your callback. Set up observers before spawning, or seed manually with `query(...)`.

The official pattern is to push ids onto queues from observers and drain the queues in a system (`MIGRATION_GUIDE` §4, L151–172). A sketch of a PixiJS RenderSystem:

```ts
import { observe, onAdd, onRemove, query, entityExists, hasComponent } from 'bitecs'
import { Container, Sprite, Texture } from 'pixi.js'

export function createRenderSystem(world: World<KitContext>, stage: Container) {
  const { Position, Renderable } = world.components
  const views = new Map<number, Container>()
  const entered: number[] = []
  const exited: number[] = []

  const unsubs = [
    observe(world, onAdd(Position, Renderable), (eid) => entered.push(eid)),
    observe(world, onRemove(Position, Renderable), (eid) => exited.push(eid)),
  ]
  for (const eid of query(world, [Position, Renderable])) entered.push(eid) // seed pre-existing

  const system = () => {
    for (const eid of exited.splice(0)) {
      views.get(eid)?.destroy({ children: true })
      views.delete(eid)
    }
    for (const eid of entered.splice(0)) {
      // An entity can be added and removed in the same frame, or its id recycled; re-check before creating
      if (views.has(eid) || !entityExists(world, eid) || !hasComponent(world, eid, Renderable)) continue
      const view = new Sprite(Texture.from(Renderable[eid].texture))
      stage.addChild(view)
      views.set(eid, view)
    }
    for (const eid of query(world, [Position, Renderable])) {
      const view = views.get(eid)!
      view.position.set(Position.x[eid], Position.y[eid])
    }
  }
  const dispose = () => { unsubs.forEach((u) => u()); views.forEach((v) => v.destroy()); views.clear() }
  return { system, dispose }
}
```

Exits are drained before enters. That way, if an id is removed and then re-added (recycled) in the same frame, its old view is destroyed first and a fresh one is created. (`Renderable` is AoS in this sketch.) Any PixiJS 8 specifics, such as `Texture.from` versus `Assets`, belong in the PixiJS research ticket.

## 6. 0.3-era examples vs 0.4.0

| 0.3 (common online) | 0.4.0 | Source |
|---|---|---|
| `defineComponent({ x: Types.f32 })` | plain object: `{ x: [] as number[] }` or `{ x: new Float32Array(N) }` | `MIGRATION_GUIDE` §1 |
| `Types.f32`, `Types.eid` | no `Types`. Pick an array type yourself; entity references become `createRelation()` | `MIGRATION_GUIDE` §1, §5; not exported in `index.d.ts` |
| `defineComponent()` tag | `{}` | `MIGRATION_GUIDE` L58–59 |
| `addComponent(world, Comp, eid)` | `addComponent(world, eid, Comp)` (also `removeComponent`, `hasComponent`) | `Component.d.ts`; `MIGRATION_GUIDE` L76 |
| `defineQuery([A,B])(world)` | `query(world, [A,B])` | `MIGRATION_GUIDE` §3 |
| `enterQuery(q)` / `exitQuery(q)` | `observe(world, onAdd(A,B), cb)` / `onRemove`, plus queues | `MIGRATION_GUIDE` §4 |
| `Changed(A)` | `onSet` observer or manual dirty flags | `MIGRATION_GUIDE` §3 |
| `pipe(sysA, sysB)` | **still exported** in 0.4 (`pipe` returns a function that threads its arguments through each function in turn). A plain loop or a direct call to each system also works | `index.d.ts`; `utils/pipe.d.ts`; `index.mjs` L1057–1059 |
| `createWorld(size)` | `createWorld(context?, entityIndex?)`; there is no size argument | `World.d.ts` |
| `defineSerializer` | `createSoASerializer` etc. from `bitecs/serialization` | `MIGRATION_GUIDE` §6 |

There is a `bitecs/legacy` entry point that keeps the 0.3 API (`MIGRATION_GUIDE` §7). However, **the installed package ships no `dist/legacy/index.d.ts`**, even though `package.json` `exports`/`typesVersions` point at it. Importing it from TypeScript therefore has no types. Don't use it for the Kit.

## Sources

- `node_modules/bitecs/package.json` (version, exports)
- `node_modules/bitecs/dist/core/{index,World,Entity,Component,Query}.d.ts`, `dist/core/utils/{pipe,soa}.d.ts`
- `node_modules/bitecs/dist/core/index.mjs` (unminified runtime; line refs above)
- `node_modules/bitecs/docs/MIGRATION_GUIDE_0.4.0.md`, `docs/API.md`, `README.md`
