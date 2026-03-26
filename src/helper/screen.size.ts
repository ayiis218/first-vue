import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useScreenSize() {
  const width = ref(window.innerWidth);

  function updateWidth() {
    width.value = window.innerWidth;
  }

  onMounted(() => window.addEventListener('resize', updateWidth));
  onUnmounted(() => window.removeEventListener('resize', updateWidth));

  const isMobile = computed(() => width.value < 768);

  return { width, isMobile };
}
