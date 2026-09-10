<script setup lang="ts">
import { useId } from 'vue';

/**
 * Hover Animation — "butiran" (grain) texture that fades in over its
 * parent on hover/focus. Parent must be `group` (Tailwind) so this
 * overlay can react to `group-hover`/`group-focus-within`.
 * Pure SVG `feTurbulence` noise — no JS animation loop, cheap to run.
 */
withDefaults(
  defineProps<{
    rounded?: string;
  }>(),
  { rounded: 'rounded-none' }
)

// Each instance needs its own <filter id>; a hardcoded id would collide
// once this component is used more than once on the same page (e.g. one
// per project card), and duplicate SVG ids are invalid/unreliable.
const filterId = `grain-noise-${useId()}`;
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 group-focus-within:opacity-40 transition-opacity duration-500 mix-blend-overlay"
    :class="rounded"
    aria-hidden="true"
  >
    <svg class="h-full w-full">
      <filter :id="filterId">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" :filter="`url(#${filterId})`" />
    </svg>
  </div>
</template>
