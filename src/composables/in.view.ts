import { onMounted, onUnmounted, ref, type Ref } from 'vue';

/**
 * Tracks whether `target` is in the viewport.
 * - `once: true` (default) — sets `isVisible` true the first time it's
 *   seen, then stops observing. For one-shot reveal animations.
 * - `once: false` — keeps toggling `isVisible` every time the element
 *   enters/leaves the viewport. For "muncul dan hilang tiap scroll"
 *   section reveal/hide animations.
 */
export function useInView(
  target: Ref<HTMLElement | null>,
  options: { threshold?: number; once?: boolean } = {}
) {
  const { threshold = 0.2, once = true } = options;
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value) return;
    observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry?.isIntersecting ?? false;
        isVisible.value = intersecting;
        if (once && intersecting) {
          observer?.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(target.value);
  });

  onUnmounted(() => observer?.disconnect());

  return { isVisible };
}
