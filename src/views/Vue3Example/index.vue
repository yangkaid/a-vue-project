<template>
  <div class="p-10">
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.text" :name="item.name"></el-tab-pane>
    </el-tabs>
    {{ grandMsg }}
    <el-button @click="grandMsg = '不知道啊'">改变</el-button>
    <Transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Components[activeTab]"></component>
      </keep-alive>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue';
import ExampleOne from './compoennts/ExampleOne.vue';
import ExampleTwo from './compoennts/ExampleTwo.vue';
import ExampleThree from './compoennts/ExampleThree.vue'
import ExampleFour from './compoennts/ExampleFour.vue'
const tabList = [
  {
    text: '组件一',
    name: 'ExampleOne'
  },
  {
    text: '组件二',
    name: 'ExampleTwo'
  },
  {
    text: '组件三',
    name: 'ExampleThree'
  },
  {
    text: '组件四',
    name: 'ExampleFour'
  }
]
const activeTab = ref('ExampleOne')
const Components: any = {
  'ExampleOne': ExampleOne,
  'ExampleTwo': ExampleTwo,
  'ExampleThree': ExampleThree,
  'ExampleFour': ExampleFour
}
const grandMsg = ref('HelloWorld')
provide('grandMsg', grandMsg)
</script>
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
