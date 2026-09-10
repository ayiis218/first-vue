<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>()
</script>

<template>
  <div class="text-center md:text-left">
    <p class="font-mono text-2xl font-bold text-ink">{{ value }}</p>
    <p class="text-xs text-ink-muted uppercase tracking-wide">{{ label }}</p>
  </div>
</template>
