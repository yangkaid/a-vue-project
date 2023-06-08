import { DirectiveBinding } from 'vue';

// 扩展HTMLElement 的声明类型
interface ExtendedHTMLElement extends HTMLElement {
  _clickOutside?: (event: MouseEvent) => void;
}
// 检查点击事件是否在目标元素内部
function isClickInside(event: MouseEvent, el: HTMLElement) {
  return el.contains(event.target as Node);
}

// 自定义指令
export const clickOutside = {
  mounted(el: ExtendedHTMLElement, binding: DirectiveBinding) {
    const onClick = (event: MouseEvent) => {
      if (!isClickInside(event, el)) {
        binding.value(false);
      } else {
        binding.value(true);
      }
    };

    // 添加事件监听器
    document.addEventListener('click', onClick);

    // 在元素销毁时移除事件监听器
    el._clickOutside = onClick;
  },
  beforeUnmount(el: ExtendedHTMLElement) {
    // 移除事件监听器
    document.removeEventListener('click', el._clickOutside as EventListener);
    delete el._clickOutside;
  },
};
export default clickOutside;
