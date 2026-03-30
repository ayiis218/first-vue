<script setup lang="ts">

import type { IPropsExperience } from "@/stores/type.mock";
import CardSectionList from "./card.section.list.vue";

defineProps<{
  companyName: string;
  position: string;
  date: string;
  link?: string;
  experience?: IPropsExperience[];
}>()
</script>

<template>
  <a v-if="link" :href="link" target="_blank">
    <div class="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-400">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
        <div>
          <h4 class="text-lg font-semibold text-slate-100">{{ companyName }}</h4>
          <p class="text-indigo-400 text-sm font-medium">{{ position }}</p>
        </div>
        <span class="text-xs font-medium text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">{{ date }}</span>
      </div>
      
      <div class="space-y-5 text-slate-400 text-sm leading-relaxed relative z-10">
        <CardSectionList
          v-for="(item, index) in experience"
          :key="index"
          :title="item.title"
          :project="item.project"
        />
      </div>
    </div>
  </a>
</template>