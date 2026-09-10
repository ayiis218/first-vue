<script setup lang="ts">
// Timing is owned by usePageLoader in the parent; this component only
// owns the enter/leave transition, which is why `visible` toggles the
// v-if *inside* the same <Transition> rather than the parent mounting/
// unmounting <PageLoader> itself (the latter leaves the leave-transition
// with nothing to animate).
defineProps<{
  visible: boolean;
}>()
</script>

<template>
  <Transition name="loader-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-paper"
      role="status"
      aria-label="Loading"
    >
      <span class="font-display text-5xl text-ink animate-loader-pulse">AS</span>
      <div class="h-0.5 w-28 overflow-hidden rounded-full bg-border">
        <div class="h-full w-1/3 rounded-full bg-accent animate-loader-sweep"></div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loader-fade-leave-active {
  transition: opacity 0.4s ease;
}
.loader-fade-leave-to {
  opacity: 0;
}

@keyframes loader-pulse {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.04); }
}
.animate-loader-pulse {
  animation: loader-pulse 1.4s ease-in-out infinite;
}

@keyframes loader-sweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}
.animate-loader-sweep {
  animation: loader-sweep 1.1s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-loader-pulse,
  .animate-loader-sweep {
    animation: none;
  }
}
</style>
