import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WindiCss from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        }),
        VantResolver()
      ]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    WindiCss(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/style/element.scss" as *;`,
      }
    }
  }
})
