<script setup lang="ts">
  defineProps<{
    title?: string
    description?: string
    image?: string
  }>()
</script>

<template>
    <div class="w-full h-full border border-gray-300 p-3 rounded-md">
        <div class="w-full flex flex-col">
            <img :src="image" alt="profile" width="100%" height="100%" class="object-cover"/>
            <h1 class="text-xl font-normal font-bold">{{ title }}</h1>
            <p class="text-sm font-normal text-gray-500">{{ description }}</p>
        </div>
    </div>
</template>