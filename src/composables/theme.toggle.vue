<script setup lang="ts">
import { AkSunFill, AkMoonFill } from '@kalimahapps/vue-icons';
import { useTheme } from '@/helper/theme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to default mode' : 'Switch to dark mode'"
    class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-300"
  >
    <AkSunFill v-if="isDark" class="w-5 h-5" />
    <AkMoonFill v-else class="w-5 h-5" />
  </button>
</template>
