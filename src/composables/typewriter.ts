import { onMounted, onUnmounted, ref } from 'vue';
import { useReducedMotion } from './reduced.motion';

/**
 * Reveals `text` one character at a time on mount, then leaves a blinking
 * cursor. Renders the full text immediately when reduced motion is preferred.
 */
export function useTypewriter(text: string, speedMs = 55, startDelayMs = 300) {
  const { prefersReducedMotion } = useReducedMotion();
  const displayedText = ref('');
  const isDone = ref(false);
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  onMounted(() => {
    if (prefersReducedMotion.value) {
      displayedText.value = text;
      isDone.value = true;
      return;
    }

    let index = 0;
    const typeNext = () => {
      index += 1;
      displayedText.value = text.slice(0, index);
      if (index < text.length) {
        timeoutId = setTimeout(typeNext, speedMs);
      } else {
        isDone.value = true;
      }
    };
    timeoutId = setTimeout(typeNext, startDelayMs);
  });

  onUnmounted(() => clearTimeout(timeoutId));

  return { displayedText, isDone };
}
