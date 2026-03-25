<script setup lang="ts">
defineProps<{
  title?: string;
  project: {
    title: string;
    list: string[];
  }[]
}>()
</script>

<template>
  <div>
    <h5 v-if="title" class="inline-flex items-center gap-2 font-medium text-slate-300 mb-2">
      <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
      {{ title }}
    </h5>
    <div class="pl-5 border-l border-slate-700/50 space-y-4 ml-0.5">
      <div 
        class="space-y-1.5" 
        v-for="(item, index) in project" 
        :key="index"
      >
        <h6 v-if="item.title" class="text-slate-200 font-medium text-[15px]">{{ item.title }}</h6>
        <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
          <li 
            class="text-slate-400 text-sm leading-relaxed"
            v-for="(list, index) in item.list" 
            :key="index" 
            v-html="list"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>