import type { Command, Projection } from '@/ports'
import type { Engine } from './engine'

// Dev/test-only surface (ADR 0004, A16). Playwright acceptance drives the board
// through the same command port. Guarded by import.meta.env.DEV so a production
// build tree-shakes it away.
export interface TestApi {
  dispatch(command: Command): void
  getProjection(): Projection
  stepOnce(): void
}

declare global {
  interface Window {
    __match3?: TestApi
  }
}

export function exposeTestApi(engine: Engine): void {
  if (!import.meta.env.DEV) return
  window.__match3 = {
    dispatch: (command) => engine.port.dispatch(command),
    getProjection: () => engine.port.getProjection(),
    stepOnce: () => engine.stepOnce(),
  }
}
