import { ref, type Ref } from 'vue';
import { useReducedMotion } from './reduced.motion';

/**
 * Returns an inline transform style that pulls an element a few pixels
 * toward the cursor while hovered, plus mouse handlers to bind on the
 * element. No-ops when the user prefers reduced motion.
 */
export function useMagnetic(elementRef: Ref<HTMLElement | null>, strength = 0.3) {
  const { prefersReducedMotion } = useReducedMotion();
  const offsetX = ref(0);
  const offsetY = ref(0);

  const onMouseMove = (event: MouseEvent) => {
    if (prefersReducedMotion.value || !elementRef.value) return;
    const bounds = elementRef.value.getBoundingClientRect();
    offsetX.value = (event.clientX - (bounds.left + bounds.width / 2)) * strength;
    offsetY.value = (event.clientY - (bounds.top + bounds.height / 2)) * strength;
  };

  const onMouseLeave = () => {
    offsetX.value = 0;
    offsetY.value = 0;
  };

  const magneticStyle = () => ({
    transform: `translate(${offsetX.value}px, ${offsetY.value}px)`,
    transition: 'transform 0.2s ease-out',
  });

  return { magneticStyle, onMouseMove, onMouseLeave };
}
