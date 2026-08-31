import { createApp, h, shallowRef, type App } from 'vue'
import type { Projection } from '@/ports'
import Hud from './Hud.vue'

// The HUD adapter. Holds the latest projection in a shallowRef and re-renders
// reactively (ADR 0004). It reads projections only and never touches the world.
export interface VueAdapter {
  update(projection: Projection): void
  mount(target: HTMLElement): void
  unmount(): void
}

export function createVueAdapter(initial: Projection): VueAdapter {
  const projection = shallowRef<Projection>(initial)
  const app: App = createApp({
    render: () => h(Hud, { projection: projection.value }),
  })

  return {
    update(next) {
      projection.value = next
    },
    mount(target) {
      app.mount(target)
    },
    unmount() {
      app.unmount()
    },
  }
}
