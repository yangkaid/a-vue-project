/* 
v-debounce
按钮节流指令
*/

const debounce = {
  mounted(el, binding) {
    if (typeof binding.value !== "function") {
      throw 'callback must be a function';
    }
    let timer = null
    el.__handleClick__ = function () {
      if (timer) {
        clearInterval(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 500);
    }
    el.addEventListener("click", el.__handleClick__)
  },
  beforeUnmounted(el) {
    el.removeEventListener("click", el.__handleClick__)
  }
}

export default debounce
