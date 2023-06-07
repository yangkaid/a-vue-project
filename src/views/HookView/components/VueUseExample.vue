<script lang="ts" setup>
import { useStorage, useDraggable } from '@vueuse/core'
import { ref } from 'vue';
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
const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 580, y: 140}
})
</script>
<template>
  <div class="inline-flex">
    <el-space direction="vertical">
      <div>useStorage</div>
      <el-input v-model="state.name"></el-input>
      <el-input v-model="state.color"></el-input>
      <el-input v-model="state.size"></el-input>
      <pre>{{ text1 }}</pre>
    </el-space>
    <el-space direction="vertical">
      <div>useDraggable</div>
      <div class="w-20, h-15 bg-sky-500" ref="el" :style="style" style="position: fixed;">
        拖动我,我在{{ x }}, {{ y }}
      </div>
    </el-space>
  </div>
</template>
<style lang='scss' scoped>
</style>
