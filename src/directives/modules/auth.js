/**
 * v-auth
 * 按钮权限指令
 */
const buttonCodeList = ["add", "edit", "delete", "import", "export"]
const auth = {
	mounted(el, binding) {
		const { value } = binding;
		if (Array.isArray(value) && value.length) {
			const hasPermission = value.every(item => buttonCodeList.includes(item));
			if (!hasPermission) el.remove();
		}
	}
};

export default auth;
