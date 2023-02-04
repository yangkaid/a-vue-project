/**
 * v-copy
 * 复制某个值至剪贴板
 */
let instance = null
function handleClick() {
	const input = document.createElement("input");
  console.log(instance.copyData)
	input.value = instance.copyData.toLocaleString();
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	ElMessage({
		type: "success",
		message: "复制成功"
	});
}
const copy = {
	mounted(el, binding) {
		el.copyData = binding.value;
    instance = el
		el.addEventListener("click", handleClick);
	},
	updated(el, binding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el) {
		el.removeEventListener("click", el.__handleClick__);
	}
};



export default copy;
