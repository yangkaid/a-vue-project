import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecord, RouteRecordNormalized } from "vue-router";
const dynamicRoutes: RouteRecord[] = []
// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/index.vue");
// views文件夹下的白名单
const whiteList = ['companyinfo']
// 获取views文件夹下的组件名称
const getComponentName = (path: string) => {
  let pathArr = path.split('/')
  return pathArr[pathArr.length - 2].toLowerCase()
}
Object.keys(modules).forEach(path => {
  let name = getComponentName(path)
  if (!whiteList.includes(name)) {
    let routeItem: RouteRecordNormalized | any = {
      path: `/${name}`,
      name: name,
      component: modules[path],
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
    {
      path: '/business-info',
      name: 'BusinessInfo',
      component: () => import('@/views/CompanyInfo/BusinessInfo.vue')
    },
    {
      path: '/case-info',
      name: 'CaseInfo',
      component: () => import('@/views/CompanyInfo/CaseInfo.vue')
    },
    {
      path: '/case-info',
      name: 'CaseInfo',
      component: () => import('@/views/CompanyInfo/CaseInfo.vue')
    },
    // plop:route:insert

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
