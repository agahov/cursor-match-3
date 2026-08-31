import { createEngine } from '@/app/engine'
import { exposeTestApi } from '@/app/testApi'
import { createRenderAdapter } from '@/render/pixiAdapter'
import { createVueAdapter } from '@/ui/vueAdapter'

// Composition root wiring (ADR 0004): the engine owns the world and the loop;
// adapters subscribe to projections (HUD) or render the world each step (board).
async function boot(): Promise<void> {
  const engine = createEngine({ seed: 1 })

  const hud = createVueAdapter(engine.port.getProjection())
  engine.port.subscribe((projection) => hud.update(projection))
  const appEl = document.getElementById('app')
  if (appEl) hud.mount(appEl)

  const board = createRenderAdapter()
  const boardEl = document.getElementById('board')
  if (boardEl) await board.mount(boardEl)
  engine.port.subscribe(() => board.render(engine.world))

  exposeTestApi(engine)
  engine.start()
}

void boot()
