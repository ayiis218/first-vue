<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <RouterLink to="/" class="w-[30%] flex flex-col items-center gap-2 border border-[#42b883] hover:border-slate-300 hover:text-[#42b883] hover:scale-110 hover:opacity-300 transition-all duration-300 rounded-md p-4">
      <h1 class="text-4xl font-bold">404</h1>
      <p class="text-lg -mt-3">Page Not Found</p>
      <p class="text-blue-500 hover:scale-110 hover:opacity-300 transition-all duration-300">Back to Home</p>
    </RouterLink>
  </div>
</template>