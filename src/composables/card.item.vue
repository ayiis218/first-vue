<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  image: string;
  techStack: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 border border-slate-700 rounded-lg p-4">
    <div class="w-full h-full rounded-lg">
      <img :src="image" :alt="title" class="w-full h-full object-cover rounded-lg">
    </div>
    <div class="flex flex-col">
      <h5 class="text-lg font-semibold text-slate-100">{{ title }}</h5>
      <p class="text-slate-400 text-sm leading-relaxed">{{ description }}</p>
      <h5 class="text-slate-400 text-sm leading-relaxed mt-2">
        Tech Stack: 
        <span class="text-slate-200">{{ techStack }}</span>
      </h5>
    </div>
  </div>
</template>