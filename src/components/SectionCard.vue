<script setup lang="ts">
import { ref } from 'vue';
import type { IPropsExperience } from "@/stores/type.mock";
import SectionCardList from "./SectionCardList.vue";
import { useInView } from '@/composables/in.view';

defineProps<{
  companyName: string;
  position: string;
  date: string;
  link?: string;
  experience?: IPropsExperience[];
}>()

const cardRef = ref<HTMLElement | null>(null);
const { isVisible } = useInView(cardRef, { threshold: 0.1, once: false });
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link || undefined"
    :target="link ? '_blank' : undefined"
    :rel="link ? 'noopener noreferrer' : undefined"
  >
    <div
      ref="cardRef"
      :data-reveal="isVisible"
      class="group relative p-6 rounded-2xl bg-surface border border-border hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 hover:bg-surface-hover transition-all duration-400"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
        <div>
          <h4 class="font-display text-lg text-ink">{{ companyName }}</h4>
          <p class="text-accent text-sm font-medium">{{ position }}</p>
        </div>
        <span class="font-mono text-xs font-medium text-ink-muted bg-surface-hover px-3 py-1 rounded-full whitespace-nowrap">{{ date }}</span>
      </div>

      <div class="space-y-5 text-ink-soft text-sm leading-relaxed relative z-10">
        <SectionCardList
          v-for="(item, index) in experience"
          :key="index"
          :title="item.title"
          :project="item.project"
        />
      </div>
    </div>
  </component>
</template>
