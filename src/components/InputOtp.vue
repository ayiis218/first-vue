<script setup lang="ts">
  defineProps<{
    value: number
    onClick: (value: number) => void
  }>()
</script>

<template>
    <input 
      type="text" 
      v-for="length in 4" 
      class="w-8 h-8 text-black border border-gray-300 rounded-full text-center" 
      @click="onClick(length)" 
      :value="value"
      maxlength="1"
    />
</template>