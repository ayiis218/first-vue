import { ref } from 'vue';
import { useInView } from './in.view';

/**
 * Thin `useInView` wrapper for the common "section fades in when scrolled
 * into view, fades back out when scrolled away" pattern — repeats every
 * time, rather than firing once.
 */
export function useScrollReveal(threshold = 0.15) {
  const target = ref<HTMLElement | null>(null);
  const { isVisible } = useInView(target, { threshold, once: false });
  return { target, isVisible };
}
