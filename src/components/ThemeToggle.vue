<script setup lang="ts">
import { AkSunFill, AkMoonFill } from '@kalimahapps/vue-icons';
import { useTheme } from '@/composables/theme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to default mode' : 'Switch to dark mode'"
    class="text-ink-muted hover:text-ink transition-colors duration-300"
  >
    <AkSunFill v-if="isDark" class="w-5 h-5" />
    <AkMoonFill v-else class="w-5 h-5" />
  </button>
</template>
