import auth from "./modules/auth";
import copy from "./modules/copy";
import debounce from './modules/debounce'
import throttle from "./modules/throttle";
import draggable from "./modules/draggable";
import dom2png from "./modules/dom2png";

const directivesList = {
	// Custom directives
	auth,
  copy,
  debounce,
  throttle,
  draggable,
  dom2png
};

const directives = {
	install: function (app) {
		Object.keys(directivesList).forEach(key => {
			// 注册所有自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
