<script setup lang="ts">
import { useParallax } from '@/composables/parallax';

// Special Motion Effect — each blob drifts at its own scroll-linked speed
// (the wrapper) layered on top of its own idle organic drift (the inner
// .blob CSS animation), giving real parallax depth as the page scrolls.
const { offset: accentOffset } = useParallax(0.12);
const { offset: metricOffset } = useParallax(0.22);
const { offset: recognitionOffset } = useParallax(0.08);
</script>

<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div class="blob-wrap" :style="{ transform: `translateY(${accentOffset}px)` }">
      <div class="blob blob-accent"></div>
    </div>
    <div class="blob-wrap" :style="{ transform: `translateY(${metricOffset}px)` }">
      <div class="blob blob-metric"></div>
    </div>
    <div class="blob-wrap" :style="{ transform: `translateY(${recognitionOffset}px)` }">
      <div class="blob blob-recognition"></div>
    </div>
  </div>
</template>

<style scoped>
.blob-wrap {
  position: absolute;
  inset: 0;
}

.blob {
  position: absolute;
  width: 40vw;
  height: 40vw;
  max-width: 420px;
  max-height: 420px;
  border-radius: 9999px;
  filter: blur(70px);
  opacity: 0.22;
}

.blob-accent {
  top: -10%;
  left: 5%;
  background: rgb(var(--color-accent));
  animation: drift-a 18s ease-in-out infinite;
}

.blob-metric {
  top: 15%;
  right: 0%;
  background: rgb(var(--color-metric));
  animation: drift-b 22s ease-in-out infinite;
}

.blob-recognition {
  bottom: -15%;
  left: 30%;
  background: rgb(var(--color-recognition));
  animation: drift-c 26s ease-in-out infinite;
}

@keyframes drift-a {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(4%, 6%) scale(1.08); }
}
@keyframes drift-b {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-6%, 4%) scale(0.95); }
}
@keyframes drift-c {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(3%, -5%) scale(1.05); }
}
</style>
