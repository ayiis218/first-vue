<script setup lang="ts">
defineProps<{
  label: string;
  active: boolean;
}>()

defineEmits<{
  select: [label: string];
}>()
</script>

<template>
  <li>
    <button
      type="button"
      @click="$emit('select', label)"
      :aria-pressed="active"
      class="rounded-full border px-3 py-1 text-sm transition-all duration-200"
      :class="active
        ? 'bg-accent border-accent text-on-accent shadow-sm'
        : 'border-border-strong text-ink-soft hover:border-accent hover:text-accent'"
    >
      {{ label }}
    </button>
  </li>
</template>
