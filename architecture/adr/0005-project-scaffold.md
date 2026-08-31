# 0005. Project scaffold

- **Status:** accepted
- **Date:** 2026-08-30
- **Resolves:** A15

## Context

ADR 0002/0003 chose TypeScript + Vite + Vitest + Vue + Playwright and a code
layout to be **created in Cycle 2**. Standing up the buildable empty project
needs concrete bootstrap tooling.

## Decision

- Scaffold with **Vite** using the **`vue-ts`** template, at the **repository
  root** — the app co-locates with the existing `spec/`, `architecture/`,
  `wiki/`, and `process/` docs (this repo is "the kit plus one test game").
- **Package manager:** pnpm. Commit the lockfile.
- **Node:** current LTS, pinned via `.nvmrc` and `engines` in `package.json`.
- Source and test layout follow [ADR 0003](0003-test-runner-and-code-layout.md)
  (`src/{domain,ecs,ports,render,ui,app}`, `tests/{features,steps,e2e}`).

## Consequences

- One buildable root; docs and code share the repo.
- pnpm lockfile + pinned Node give reproducible installs and CI.
- PixiJS, bitecs, and a Gherkin-over-Vitest binding are added as dependencies
  during Implementation, not scaffolded by the template.

## Alternatives

- **vanilla-ts + manual Vue wiring** — more control, more boilerplate; `vue-ts`
  is the supported path.
- **npm / yarn** — fine; pnpm chosen for speed and a strict `node_modules`.
- **App in a subfolder (`/app` or `/game`)** — cleaner separation, but adds
  path friction for a single-app repo. Root chosen; revisit if the repo becomes
  multi-package.
