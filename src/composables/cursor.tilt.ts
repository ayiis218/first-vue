import { ref, type Ref } from 'vue';
import { useReducedMotion } from './reduced.motion';

/**
 * Returns an inline transform style that tilts an element in 3D following
 * the cursor position within its own bounds, plus mouse handlers to bind
 * on the element. No-ops when the user prefers reduced motion.
 */
export function useCursorTilt(elementRef: Ref<HTMLElement | null>, maxTiltDeg = 10) {
  const { prefersReducedMotion } = useReducedMotion();
  const rotateX = ref(0);
  const rotateY = ref(0);

  const onMouseMove = (event: MouseEvent) => {
    if (prefersReducedMotion.value || !elementRef.value) return;
    const bounds = elementRef.value.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateY.value = px * maxTiltDeg * 2;
    rotateX.value = -py * maxTiltDeg * 2;
  };

  const onMouseLeave = () => {
    rotateX.value = 0;
    rotateY.value = 0;
  };

  const tiltStyle = () => ({
    transform: `perspective(800px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`,
    transition: 'transform 0.15s ease-out',
  });

  return { tiltStyle, onMouseMove, onMouseLeave };
}
