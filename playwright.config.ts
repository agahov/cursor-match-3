import { defineConfig } from '@playwright/test'

// Acceptance tier (ADR 0003). Journeys land in Cycle 3+; this config is the
// contract. Tests drive the board through window.__match3 (ADR 0004, A16).
export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:4173',
  },
  webServer: {
    command: 'pnpm build && pnpm preview --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
})
