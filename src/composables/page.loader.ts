import { onMounted, ref } from 'vue';

/**
 * Keeps `isLoading` true for a minimum duration so the branded loader never
 * just flashes on a fast connection, then clears it once the window has
 * fully loaded (or immediately if it already has).
 */
export function usePageLoader(minDurationMs = 900) {
  const isLoading = ref(true);

  onMounted(() => {
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minDurationMs - elapsed);
      setTimeout(() => {
        isLoading.value = false;
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
  });

  return { isLoading };
}
