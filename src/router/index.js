import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [{
    path: "/",
    name: "Home",
    component: () => import("../views/ThemeView/index.vue")
  }],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router
