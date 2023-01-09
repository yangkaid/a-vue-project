import { createApp } from 'vue'
import App from './App.vue'
// 全局变量
import './style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
