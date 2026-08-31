import { mulberry32 } from '@/domain/rng'
import { project, step } from '@/ecs/step'
import { makeWorld, type World } from '@/ecs/world'
import type { Command, GamePort, Projection } from '@/ports'

export interface Engine {
  readonly port: GamePort
  readonly world: World
  stepOnce(): void
  start(): void
  stop(): void
}

export interface EngineOptions {
  seed?: number
  stepMs?: number
}

// The composition root (ADR 0004): owns the seeded world, the command queue,
// and the fixed-timestep loop. Each step drains the queue, runs systems, then
// emits a projection.
export function createEngine(options: EngineOptions = {}): Engine {
  const seed = options.seed ?? 1
  const stepMs = options.stepMs ?? 1000 / 60
  const world = makeWorld(mulberry32(seed))

  const queue: Command[] = []
  const listeners = new Set<(projection: Projection) => void>()
  let current: Projection = project(world)

  function emit(): void {
    current = project(world)
    for (const listener of listeners) listener(current)
  }

  function stepOnce(): void {
    const commands = queue.splice(0, queue.length)
    step(world, commands)
    emit()
  }

  const port: GamePort = {
    dispatch(command) {
      queue.push(command)
    },
    getProjection() {
      return current
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }

  let raf = 0
  let last = 0
  let accumulator = 0

  function frame(now: number): void {
    if (last === 0) last = now
    accumulator += now - last
    last = now
    while (accumulator >= stepMs) {
      stepOnce()
      accumulator -= stepMs
    }
    raf = requestAnimationFrame(frame)
  }

  return {
    port,
    world,
    stepOnce,
    start() {
      if (raf) return
      last = 0
      accumulator = 0
      raf = requestAnimationFrame(frame)
    },
    stop() {
      if (!raf) return
      cancelAnimationFrame(raf)
      raf = 0
    },
  }
}
