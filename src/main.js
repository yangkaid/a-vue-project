import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 全局变量
import './style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
// 自定义指令
import directives from './directives'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(directives)
app.mount('#app')
