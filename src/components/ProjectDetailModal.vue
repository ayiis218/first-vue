<script setup lang="ts">
import { ref, watch } from 'vue';
import { motion, AnimatePresence } from 'motion-v';
import { SuClose } from '@kalimahapps/vue-icons';

const props = defineProps<{
  open: boolean;
  title: string;
  description: string;
  images: string[];
  techStack: string;
  link: string;
}>()

const emit = defineEmits<{
  close: [];
}>()

const activeImageIndex = ref(0);
const techChips = () => props.techStack.split(',').map((t) => t.trim()).filter(Boolean);

watch(
  () => props.open,
  (open) => {
    activeImageIndex.value = 0;
    document.body.style.overflow = open ? 'hidden' : '';
  }
);

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close');
}
</script>

<template>
  <AnimatePresence>
    <motion.div
      v-if="open"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      class="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4"
      @click.self="emit('close')"
      @keydown="onKeydown"
    >
      <motion.div
        :initial="{ opacity: 0, y: 24, scale: 0.97 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="{ opacity: 0, y: 12, scale: 0.98 }"
        :transition="{ duration: 0.25, ease: 'easeOut' }"
        class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
      >
        <button
          @click="emit('close')"
          aria-label="Close project details"
          class="absolute right-4 top-4 z-10 rounded-full bg-surface/90 p-1.5 text-ink-soft hover:text-ink border border-border"
        >
          <SuClose class="w-5 h-5" />
        </button>

        <div v-if="images.length" class="w-full">
          <img :src="images[activeImageIndex]" :alt="`${title} screenshot`" class="w-full max-h-72 object-cover" />
          <div v-if="images.length > 1" class="flex gap-2 p-3">
            <button
              v-for="(img, idx) in images"
              :key="idx"
              @click="activeImageIndex = idx"
              class="h-12 w-16 shrink-0 overflow-hidden rounded-md border transition-opacity"
              :class="idx === activeImageIndex ? 'border-accent opacity-100' : 'border-border opacity-60 hover:opacity-90'"
            >
              <img :src="img" :alt="`${title} thumbnail ${idx + 1}`" class="h-full w-full object-cover" />
            </button>
          </div>
        </div>

        <div class="p-6 space-y-4">
          <h3 class="font-display text-2xl text-ink">{{ title }}</h3>
          <p class="text-ink-soft text-sm leading-relaxed">{{ description }}</p>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">Tech Stack</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tech in techChips()"
                :key="tech"
                class="rounded-full border border-border-strong px-3 py-1 text-xs text-ink-soft"
              >
                {{ tech }}
              </li>
            </ul>
          </div>

          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-strong transition-colors"
          >
            Visit Live Project
          </a>
          <p v-else class="inline-flex items-center gap-1.5 rounded-md border border-border-strong px-4 py-2 text-sm text-ink-muted">
            Internal enterprise system — not publicly accessible
          </p>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
</template>
