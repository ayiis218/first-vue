<script lang="ts" setup>
import { ref } from 'vue';
import ProjectDetailModal from './ProjectDetailModal.vue';
import GrainOverlay from './GrainOverlay.vue';
import { useCursorTilt } from '@/composables/cursor.tilt';

withDefaults(
  defineProps<{
    title: string;
    description: string;
    images: string[];
    link: string;
    techStack: string;
    dimmed?: boolean;
  }>(),
  { dimmed: false }
)
// `images` sudah berisi URL hasil import aset dari src/stores/mock.ts.

const cardRef = ref<HTMLElement | null>(null);
const { tiltStyle, onMouseMove, onMouseLeave } = useCursorTilt(cardRef);
const isDetailOpen = ref(false);
</script>

<template>
  <button
    ref="cardRef"
    type="button"
    class="group relative flex flex-col gap-3 rounded-xl bg-surface p-5 border border-border text-left transition-[opacity,border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden"
    :class="dimmed ? 'opacity-40' : 'opacity-100'"
    :style="tiltStyle()"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @click="isDetailOpen = true"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div v-if="images.length" class="flex flex-row gap-3 overflow-hidden rounded-lg">
      <div v-for="(img, idx) in images" :key="idx" class="relative w-full max-h-48 rounded-lg overflow-hidden">
        <img :src="img" :alt="title" loading="lazy" class="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700 ease-out">
        <GrainOverlay rounded="rounded-lg" />
      </div>
    </div>
    <div class="flex flex-col z-10 mt-2">
      <h5 class="font-display text-lg text-ink group-hover:text-accent transition-colors">{{ title }}</h5>
      <p class="text-ink-soft text-sm leading-relaxed mt-2">{{ description }}</p>
      <div class="mt-4 pt-4 border-t border-border">
        <h5 class="text-ink-muted text-xs font-semibold uppercase tracking-wider mb-2">Tech Stack</h5>
        <p class="text-accent text-sm font-medium">{{ techStack }}</p>
      </div>
    </div>
  </button>

  <ProjectDetailModal
    :open="isDetailOpen"
    :title="title"
    :description="description"
    :images="images"
    :techStack="techStack"
    :link="link"
    @close="isDetailOpen = false"
  />
</template>
