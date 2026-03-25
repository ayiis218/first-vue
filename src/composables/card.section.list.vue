<script setup lang="ts">
defineProps<{
  title?: string;
  subTitle?: string;
  list: string[];
}>()
</script>

<template>
  <div>
    <h5 v-if="title" class="inline-flex items-center gap-2 font-medium text-slate-300 mb-2">
      <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
      {{ title }}
    </h5>
    <div class="pl-5 border-l border-slate-700/50 space-y-4 ml-0.5">
      <div class="space-y-1.5">
        <h6 v-if="subTitle" class="text-slate-200 font-medium text-[15px]">{{ subTitle }}</h6>
        <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
          <li v-for="(item, index) in list" :key="index" v-html="item"></li>
        </ul>
      </div>
    </div>
  </div>
</template>