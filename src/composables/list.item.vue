<script lang="ts" setup>
defineProps<{
  title: string;
  list: string[];
}>()
</script>

<template>
  <h5 class="text-lg font-semibold text-slate-100">{{ title }}</h5>
  <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
    <li v-for="(item, index) in list" :key="index">{{ item }}</li>
  </ul>
</template>