# Map: 2D game Kit base

Label: wayfinder:map

## Destination

The Kit skeleton is decided well enough to build the first feature, "a rect drawn on screen", through the full loop: UI Command → Event Bus → Command Handler → components → ECS systems → `RenderSystem` → PixiJS.

## Notes

- Domain: a feature-first Kit for 2D games with a fixed camera and no physics. Match-3 is the first game, later.
- Vocabulary lives in `CONTEXT.md` at the repo root. Use its terms.
- Skills for grilling tickets: `grilling` and `domain-modeling`. Research tickets: `research`.
- Planning only: tickets produce decisions, not built code.
- Platforms: web now (desktop and mobile browsers), app-store wrapper later.
- Stack hypothesis: bitECS 0.4.0, PixiJS 8.20, Vue 3.5 + shadcn-vue, Vite 8, Vitest 4, TypeScript 5.6. There is no `package.json` yet.

Settled while charting:

- Monorepo with four packages: `core` (ECS world, loop, Event Bus, Plugin contract), `render` (PixiJS bridge), `domain` (game rules: components, systems, Command Handlers), `ui` (Vue/shadcn Shell). Low coupling between them.
- UI → game: the UI sends a Command on the Event Bus; a Command Handler changes components; ECS systems update component values.
- Game → UI: ECS emits Events; a reactive UI object updates from them. The UI never reads ECS directly.
- Rendering: a Render component, a map from entity id to PixiJS container, and a `RenderSystem` that keeps them in sync.
- Core Plugins are `core` and `render`. Others are Special Plugins, which can be promoted to Core later.

## Decisions so far

<!-- one line per resolved ticket: [title](issues/NN-slug.md): gist -->

## Not yet specified

- Game loop timing: fixed or variable timestep, and the order of system phases.
- Plugin contract details: what a Plugin declares and how promotion to Core works.
- Game Config, Archetype and init-values format.
- Input model (touch, mouse, keyboard), screen resolution and scaling.
- Testing strategy (ECS logic in Vitest, visual checks in Playwright).
- Roadmap steps after the rect: movement, VFX, collision, the Board, then match-3.

## Out of scope

- Physics simulation, scrolling or moving cameras, 3D.
- The app-store wrapper (later effort).
- Building code: this map ends when the rect step can be built.
