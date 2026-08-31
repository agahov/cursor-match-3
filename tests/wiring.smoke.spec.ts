import { nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import { createEngine } from '@/app/engine'
import { createRenderAdapter } from '@/render/pixiAdapter'
import { createVueAdapter } from '@/ui/vueAdapter'

// Wiring/init smoke tier (ADR 0003/0004): the modules connect. No rule logic.
describe('wiring/init smoke', () => {
  it('round-trips a command through the port after a step', () => {
    const engine = createEngine({ seed: 1 })
    expect(engine.port.getProjection()).toEqual({ step: 0, pingCount: 0 })

    engine.port.dispatch({ type: 'ping' })
    // queued, not applied until a step
    expect(engine.port.getProjection().pingCount).toBe(0)

    engine.stepOnce()
    expect(engine.port.getProjection()).toEqual({ step: 1, pingCount: 1 })
  })

  it('advances deterministically per fixed step', () => {
    const engine = createEngine({ seed: 1 })
    engine.stepOnce()
    engine.stepOnce()
    expect(engine.port.getProjection().step).toBe(2)
  })

  it('renders an empty world with an empty entity map', () => {
    const engine = createEngine({ seed: 1 })
    const board = createRenderAdapter()
    board.render(engine.world)
    expect(board.sprites.size).toBe(0)
    expect(board.stage.children.length).toBe(0)
  })

  it('mounts the HUD and reflects the projection', async () => {
    const engine = createEngine({ seed: 1 })
    const hud = createVueAdapter(engine.port.getProjection())
    engine.port.subscribe((projection) => hud.update(projection))

    const el = document.createElement('div')
    document.body.appendChild(el)
    hud.mount(el)
    await nextTick()
    expect(el.textContent).toContain('step: 0')

    engine.port.dispatch({ type: 'ping' })
    engine.stepOnce()
    await nextTick()
    expect(el.textContent).toContain('ping: 1')

    hud.unmount()
    el.remove()
  })
})
