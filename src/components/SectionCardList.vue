<script setup lang="ts">
import type { IPropsProject } from '@/stores/type.mock';

defineProps<{
  title?: string;
  project: IPropsProject[]
}>()
</script>

<template>
  <div>
    <h5 v-if="title" class="inline-flex items-center gap-2 font-medium text-ink-soft mb-2">
      <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
      {{ title }}
    </h5>
    <div class="pl-5 border-l border-border space-y-4 ml-0.5">
      <div
        class="space-y-1.5"
        v-for="(item, index) in project"
        :key="index"
      >
        <h6 v-if="item.title" class="text-ink font-medium text-[15px]">{{ item.title }}</h6>
        <ul class="list-disc pl-4 space-y-1.5 marker:text-accent/60">
          <li
            class="text-ink-soft text-[14.5px] leading-relaxed"
            v-for="(list, index) in item.list"
            :key="index"
            v-html="list"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>
