import auth from "./modules/auth";
import copy from "./modules/copy";
import debounce from './modules/debounce'
import throttle from "./modules/throttle";
import draggable from "./modules/draggable";

const directivesList = {
	// Custom directives
	auth,
  copy,
  debounce,
  throttle,
  draggable
};

const directives = {
	install: function (app) {
		Object.keys(directivesList).forEach(key => {
      console.log(key);
			// 注册所有自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
