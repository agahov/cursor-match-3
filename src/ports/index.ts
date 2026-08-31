import type { Command } from './commands'
import type { Projection } from './projection'

export type { Command, PingCommand } from './commands'
export type { Projection } from './projection'

// The single seam between the simulation and the adapters (ADR 0002/0004):
// commands go in, read-only projections come out.
export interface GamePort {
  dispatch(command: Command): void
  getProjection(): Projection
  subscribe(listener: (projection: Projection) => void): () => void
}
