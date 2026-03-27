<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  images: string[];
  link: string;
  techStack: string
}>()

// Eagerly import all assets so Vite bundles them and we can resolve paths dynamically
const assetModules = import.meta.glob('@/assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }) as Record<string, string>;

const getImageUrl = (path: string) => {
  const fileName = path.split('/').pop();
  if (!fileName) return path;

  const modulePath = Object.keys(assetModules).find(k => k.endsWith('/' + fileName));
  return modulePath ? assetModules[modulePath] : path;
}
</script>

<template>
  <div class="flex flex-col gap-2 border border-slate-700 rounded-lg p-4">
    <div class="flex flex-row gap-2 ">
      <div v-for="(img, idx) in images" :key="idx" class="w-full h-full rounded-lg">
        <img :src="getImageUrl(img)" :alt="title" class="w-full h-full object-cover rounded-lg">
      </div>
    </div>
    <div class="flex flex-col">
      <a :href="link" target="_blank">
        <h5 class="text-base font-semibold text-slate-100">{{ title }}</h5>
      </a>
      <p class="text-slate-400 text-sm leading-relaxed">{{ description }}</p>
      <h5 class="text-slate-400 text-sm leading-relaxed mt-2">
        Tech Stack: 
        <span class="text-slate-200">{{ techStack }}</span>
      </h5>
    </div>
  </div>
</template>