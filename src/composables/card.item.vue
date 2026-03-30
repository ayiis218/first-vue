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
  <a :href="link" target="_blank" class="inline-flex w-fit group/link">
    <div class="group relative flex flex-col gap-3 rounded-xl bg-slate-900/40 p-5 border border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-800/50 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div class="flex flex-row gap-3 overflow-hidden rounded-lg">
        <div v-for="(img, idx) in images" :key="idx" class="w-full max-h-48 rounded-lg overflow-hidden">
          <img :src="getImageUrl(img)" :alt="title" class="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700 ease-out">
        </div>
      </div>
      <div class="flex flex-col z-10 mt-2">
          <h5 class="text-lg font-bold text-slate-100 group-hover/link:text-indigo-400 transition-colors">{{ title }}</h5>
        <p class="text-slate-300 text-sm leading-relaxed mt-2">{{ description }}</p>
        <div class="mt-4 pt-4 border-t border-slate-700/50">
          <h5 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Tech Stack</h5>
          <p class="text-indigo-300/90 text-sm font-medium">{{ techStack }}</p>
        </div>
      </div>
    </div>
  </a>
</template>