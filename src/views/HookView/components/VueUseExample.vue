<script lang="ts" setup>
// import { useStorage, useDraggable } from '@vueuse/core'
import { ref } from 'vue';
import { useTitle } from '@/hooks/useTitle'
import { useStorage } from '@/hooks/useStorage';
import ChildView from './ChildView.vue'
// useStorage
const theDefault = {
  name: 'Tom',
  color: 'yellow',
  size: 'medium',
  count: 0
}
const state = useStorage('local-storage', theDefault)
const text1 = localStorage.getItem('local-storage')
// useDraggable
// const el = ref<HTMLElement | null>(null)
// const { x, y, style } = useDraggable(el, {
//   initialValue: { x: 580, y: 140 }
// })
// useTitle
const title = useTitle()
console.log(title.value)
const changeTitle = (value: string) => {
  title.value = value
}
// useVModel
const msg = ref('hahaha')
</script>
<template>
  <el-space direction="vertical" size="large">
    <div class="flex flex-col justify-center items-center space-y-4">
      <div class="text-lg font-semibold">useStorage</div>
      <el-input v-model="state.name"></el-input>
      <el-input v-model="state.color"></el-input>
      <el-input v-model="state.size"></el-input>
      <pre>{{ text1 }}</pre>
    </div>
    <!-- <el-space direction="vertical">
      <div>useDraggable</div>
      <div class="w-20, h-15 bg-sky-500" ref="el" :style="style" style="position: fixed;">
        拖动我,我在{{ x }}, {{ y }}
      </div>
    </el-space> -->
    <div class="flex flex-col justify-center items-center space-y-4">
      <div class="text-lg font-semibold">useTitle</div>
      <div>网页的标题: {{ title }}</div>
      <el-input v-model="title" placeholder="请输入网页的标题" @change="changeTitle"></el-input>
    </div>
    <div class="flex flex-col justify-center items-center space-y-4">
      <div class="text-lg font-semibold">useVModel</div>
      <el-input v-model="msg"></el-input>
      <child-view v-model:msg="msg"></child-view>
    </div>
  </el-space>
</template>
<style lang='scss' scoped>
</style>
