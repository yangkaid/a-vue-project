import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WindiCss from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
import federation from '@originjs/vite-plugin-federation'
// import vitePluginVue3ToVue2 from './vite-plugin-vue3-to-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vitePluginVue3ToVue2(),
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
    }),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './vue3': './node_modules/vue/index.js',
        './Example': './src/views/RemoteView/ExampleView.vue',
        './Theme': './src/views/ThemeView/index.vue',
        './Chart': './src/views/ChartsView/LineChart/index.vue',
      }
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
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
      },
    },
  },
})
