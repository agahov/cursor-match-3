import type { Command, Projection } from '@/ports'
import { commandSystem } from './systems'
import type { World } from './world'

// One fixed simulation step (ADR 0004): drain-provided commands, run systems.
// The loop that owns timing lives in `app/`.
export function step(world: World, commands: readonly Command[]): void {
  world.resources.step += 1
  commandSystem(world, commands)
  // future rule systems run here
}

// Read-only HUD projection derived from the world after a step.
export function project(world: World): Projection {
  return {
    step: world.resources.step,
    pingCount: world.resources.pingCount,
  }
}
