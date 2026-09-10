import { onMounted, onUnmounted, ref } from 'vue';

/**
 * Tracks which section id is currently in view, for nav highlighting.
 * Observes elements matching the given ids once they exist in the DOM.
 */
export function useScrollSpy(sectionIds: string[], initial: string) {
  const activeSection = ref(initial);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          activeSection.value = visible.target.id;
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer?.observe(el);
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { activeSection };
}
