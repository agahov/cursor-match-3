// The HUD projection: a small immutable snapshot of aggregate state emitted
// after each step (ADR 0004). The board does not use this path; it is rendered
// by a render system reading the world directly.
export interface Projection {
  readonly step: number
  readonly pingCount: number
}
