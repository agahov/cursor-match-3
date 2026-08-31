import { Application, Container } from 'pixi.js'
import type { World } from '@/ecs/world'
import { renderSystem } from './renderSystem'

// The board adapter. Constructing it is headless-safe (only `mount` creates a
// real WebGL Application), so the wiring smoke test can build it without a DOM.
export interface RenderAdapter {
  readonly stage: Container
  readonly sprites: Map<number, Container>
  render(world: World): void
  mount(target: HTMLElement): Promise<void>
  destroy(): void
}

export function createRenderAdapter(): RenderAdapter {
  const stage = new Container()
  const sprites = new Map<number, Container>()
  let app: Application | null = null

  return {
    stage,
    sprites,
    render(world) {
      renderSystem(world, stage, sprites)
    },
    async mount(target) {
      app = new Application()
      await app.init({ background: '#101014', resizeTo: target })
      app.stage.addChild(stage)
      target.appendChild(app.canvas)
    },
    destroy() {
      app?.destroy(true)
      app = null
      sprites.clear()
    },
  }
}
