import { Container } from 'pixi.js'
import type { World } from '@/ecs/world'

// One renderable, in render-state (pixels). Derived from rule-state; the
// skeleton produces none until Cycle 3 game features add board entities.
export interface RenderItem {
  readonly id: number
  readonly x: number
  readonly y: number
}

// Read-only view of the world's renderable entities (ADR 0004). Reads
// rule-state only; never writes it. Empty in the skeleton.
export function renderables(_world: World): readonly RenderItem[] {
  return []
}

// Reconciles the entity -> DisplayObject map against the world each step.
// Writes only the scene graph (render-state), never rule-state.
export function renderSystem(
  world: World,
  stage: Container,
  sprites: Map<number, Container>,
): void {
  const desired = renderables(world)
  const seen = new Set<number>()

  for (const item of desired) {
    seen.add(item.id)
    let sprite = sprites.get(item.id)
    if (!sprite) {
      sprite = new Container()
      sprites.set(item.id, sprite)
      stage.addChild(sprite)
    }
    sprite.position.set(item.x, item.y)
  }

  for (const [id, sprite] of sprites) {
    if (!seen.has(id)) {
      stage.removeChild(sprite)
      sprite.destroy()
      sprites.delete(id)
    }
  }
}
