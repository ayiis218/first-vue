import { onMounted, onUnmounted, ref } from 'vue';
import { useReducedMotion } from './reduced.motion';

/**
 * Special Motion Effect — returns a `translateY` (px) that tracks
 * `window.scrollY * speed`, rAF-throttled. `speed` < 1 makes an element
 * drift slower than the page (background depth), `speed` > 1 faster.
 * No-ops (stays at 0) when the user prefers reduced motion.
 */
export function useParallax(speed = 0.2) {
  const { prefersReducedMotion } = useReducedMotion();
  const offset = ref(0);
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      offset.value = window.scrollY * speed;
      ticking = false;
    });
  };

  onMounted(() => {
    if (prefersReducedMotion.value) return;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  onUnmounted(() => window.removeEventListener('scroll', onScroll));

  return { offset };
}
