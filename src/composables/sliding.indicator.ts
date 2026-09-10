import { nextTick, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';

/**
 * Positions a shared indicator element under whichever nav item matches
 * `activeKey`, by measuring the DOM. Register each item's element via
 * `setItemRef(key, el)` (typically the `:ref` callback in a v-for).
 */
export function useSlidingIndicator(activeKey: Ref<string>) {
  const itemRefs: Record<string, HTMLElement> = {};
  const style = ref({ left: '0px', width: '0px', opacity: '0' });

  function setItemRef(key: string, el: HTMLElement | null) {
    if (el) itemRefs[key] = el;
  }

  async function update() {
    await nextTick();
    const el = itemRefs[activeKey.value];
    if (!el) return;
    style.value = {
      left: `${el.offsetLeft}px`,
      width: `${el.offsetWidth}px`,
      opacity: '1',
    };
  }

  onMounted(() => {
    update();
    window.addEventListener('resize', update);
  });
  onUnmounted(() => window.removeEventListener('resize', update));
  watch(activeKey, update);

  return { setItemRef, style };
}
