import { createRouter, createWebHashHistory } from "vue-router";
const dynamicRoutes = []
// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");
// views文件夹下的白名单
const whiteList = ['companyinfo']
// 获取views文件夹下的组件名称
const getComponentName = (path) => {
  let pathArr = path.split('/')
  return pathArr[pathArr.length - 2].toLowerCase()
}

Object.keys(modules).forEach(path => {
  let name = getComponentName(path)
  if (!whiteList.includes(name)) {
    console.log('路由名称', name);
    let routeItem = {
      path: `/${name}`,
      name: name,
      component: modules[path]
    }
    dynamicRoutes.push(routeItem)
  }
})
console.log('动态路由', dynamicRoutes);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/themeview"
    },
    // plop:route:insert
    {
      path: '/business-info',
      name: 'BusinessInfo',
      component: () => import('@/views/CompanyInfo/BusinessInfo.vue')
    },
    ...dynamicRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      redirect: { path: "/404" }
    }
  ],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router
