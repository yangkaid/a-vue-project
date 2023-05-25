// 批量导入components文件夹下的所有组件
const componentModules = import.meta.globEager('./*.vue')
// vue3注册全局组件
const components = {
   install(app) {
    for (const [key, component] of Object.entries(componentModules)) {
      app.component(component.default.__name, component.default)
    }
  }

}
export default components

