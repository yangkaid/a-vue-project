<script lang="ts" setup>
import { ref } from 'vue'
import MouseExample from './components/MouseExample.vue';
import TableComp from './components/TableComp.vue'
import VueUseExample from './components/VueUseExample.vue';
import ClickOutside from './components/ClickOutside.vue';
const tabList = [
  {
    text: '表格封装',
    name: 'TableComp',
    keepAlive: true
  },
  {
    text: '鼠标跟踪器',
    name: 'MouseExample',
    keepAlive: false
  },
  {
    text: 'VueUse',
    name: 'VueuseExample',
    keepAlive: true
  },
  {
    text: 'ClickOutside',
    name: 'ClickOutside',
    keepAlive: false
  }
]
const activeTab = ref('TableComp')
const Components: any = {
  'MouseExample': MouseExample,
  'TableComp': TableComp,
  'VueuseExample': VueUseExample,
  'ClickOutside': ClickOutside
}
const keepAliveList = tabList.filter(item => item.keepAlive).map(item => item.name)
</script>
<template>
  <div class="p-10">
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.text" :name="item.name"></el-tab-pane>
    </el-tabs>
    <Transition name="fade" mode="out-in">
      <keep-alive :include="keepAliveList">
        <component :is="Components[activeTab]"></component>
      </keep-alive>
    </Transition>
  </div>
</template>
<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
