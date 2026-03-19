<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <HelloWorld />
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button class="bg-blue-500 text-white p-2 rounded-md cursor-pointer" @click="counter.increment">
      Increment
    </button>
  </div>
</template>
