import { onMounted, onUnmounted, ref } from "vue";
export function useClickOutside(el: HTMLElement) {
  let isInside = ref(false);
  // 检查点击事件是否在目标元素内部
  function isClickInside(event: MouseEvent, el: HTMLElement | null) {
    if (el) {
      return el.contains(event.target as Node);
    }
  }
  const onClick = (event: MouseEvent) => {
    if (isClickInside(event, el)) {
      isInside.value = true;
    } else {
      isInside.value = false;
    }
  };
  onMounted(() => {
    document.addEventListener('click', onClick);
  })
  onUnmounted(() => {
    document.removeEventListener('click', onClick);
  })
  return {
    isInside
  }

}
