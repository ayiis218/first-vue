<script setup lang="ts">
  defineProps<{
    value: number
    onClick: (value: number) => void
  }>()
</script>

<template>
    <input
      v-for="length in 4"
      :key="length"
      type="text"
      class="w-8 h-8 text-black border border-gray-300 rounded-full text-center"
      @click="onClick(length)"
      :value="value"
      maxlength="1"
    />
</template>