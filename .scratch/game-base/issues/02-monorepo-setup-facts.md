# Monorepo setup facts: pnpm, Vite, Vue, shadcn-vue, PixiJS 8

Type: research
Status: open
Blocked by: none

## Question

How do we set up a pnpm workspace monorepo with four TypeScript packages (`core`, `render`, `domain`, `ui`) where `ui` is a Vite 8 + Vue 3.5 app using shadcn-vue with Tailwind v4, and a PixiJS 8 canvas is mounted inside a Vue component? Cover: workspace layout and how packages reference each other (source imports vs builds), TypeScript project references, current shadcn-vue + Tailwind v4 install steps, PixiJS 8 async `Application.init` and correct mount/unmount in Vue, and how Vitest runs across the workspace.
