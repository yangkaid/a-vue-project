import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			redirect: "/themeview"
		}
	],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});
// 未找到路由页面
const notFoundRouter = {
	path: "/:pathMatch(.*)*",
	name: "notFound",
	redirect: { path: "/404" }
};
// 获取views文件夹下的组件名称
const getComponentName = (path) => {
	let pathArr = path.split('/')
	return pathArr[pathArr.length - 2].toLowerCase()
}

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");
router.beforeEach((to, from, next) => {
	if (router.getRoutes().length !== 1) {
		next();
		return;
	} else {
		Object.keys(modules).forEach(path => {
			let name = getComponentName(path)
			console.log('路由名称', name);
			let routeItem = {
				path: `/${name}`,
				name: name,
				component: modules[path]
			}
			router.addRoute(routeItem)
		})
		router.addRoute(notFoundRouter)
		console.log(router.getRoutes())
		next({ ...to, replace: true });
	}
})

export default router
