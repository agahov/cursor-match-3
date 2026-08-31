// Commands are a plain tagged union (ADR 0004). Adapters only produce commands;
// systems consume them. The skeleton ships one no-op command so the seam can be
// exercised before any game rules exist.
export interface PingCommand {
  readonly type: 'ping'
}

export type Command = PingCommand
