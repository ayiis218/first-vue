<script setup lang="ts">
import { ref } from 'vue';
import { useInView } from '@/composables/in.view';

withDefaults(
  defineProps<{
    title: string;
    accent?: 'accent' | 'recognition';
  }>(),
  { accent: 'accent' }
);

const headingRef = ref<HTMLElement | null>(null);
// once: false — the underline + glow replay every time the section is
// scrolled back into view, its own small "Hero Animation" moment.
const { isVisible } = useInView(headingRef, { threshold: 0.3, once: false });
</script>

<template>
  <div ref="headingRef" class="relative flex items-center gap-4">
    <div
      class="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-700"
      :class="[accent === 'recognition' ? 'bg-recognition/25' : 'bg-accent/25', isVisible ? 'opacity-100' : 'opacity-0']"
      aria-hidden="true"
    ></div>
    <h3
      class="relative font-display text-2xl text-ink tracking-wide transition-all duration-500"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
    >{{ title }}</h3>
    <div class="relative flex-1 h-px bg-border overflow-hidden">
      <div
        class="absolute inset-y-0 left-0 w-full origin-left transition-transform duration-700 ease-out"
        :class="[accent === 'recognition' ? 'bg-recognition' : 'bg-accent', isVisible ? 'scale-x-100' : 'scale-x-0']"
      ></div>
    </div>
  </div>
</template>
