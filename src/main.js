import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components/index'
// 全局变量
import './style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入虚拟文件
import 'virtual:svg-icons-register'
import 'virtual:windi.css'
// 自定义指令
import directives from './directives'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(directives).use(components)
app.mount('#app')
