import { createWorld } from 'bitecs'
import type { Rng } from '@/domain/rng'

// World-level singletons. Concrete game components/queries arrive in Cycle 3;
// the skeleton keeps only what the seam needs.
export interface Resources {
  step: number
  pingCount: number
  readonly rng: Rng
}

export type World = ReturnType<typeof createWorld> & { resources: Resources }

export function makeWorld(rng: Rng): World {
  const world = createWorld() as unknown as World
  world.resources = { step: 0, pingCount: 0, rng }
  return world
}
