<script setup lang="ts">
import type { Projection } from '@/ports'

defineProps<{ projection: Projection }>()
</script>

<template>
  <main class="hud">
    <h1>cursor-match3</h1>
    <p>step: {{ projection.step }}</p>
    <p>ping: {{ projection.pingCount }}</p>
  </main>
</template>
