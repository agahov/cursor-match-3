import type { Command } from '@/ports'
import type { World } from './world'

// Applies queued commands to the world. This is where intent becomes state;
// adapters never write components (ADR 0004). Cycle 3 adds real rule systems.
export function commandSystem(world: World, commands: readonly Command[]): World {
  for (const command of commands) {
    switch (command.type) {
      case 'ping':
        world.resources.pingCount += 1
        break
    }
  }
  return world
}
