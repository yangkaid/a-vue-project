<script lang="ts" setup>
import { ref } from 'vue'
import { useClickOutside } from '@/hooks/useClickOutside'
const text = ref('未点击')
function handleClickBox(isInside: boolean) {
  if (isInside) {
    text.value = '点击内部'
  } else {
    text.value = '点击外部'
  }
}
let el = ref<HTMLElement | null>(null)
const { isInside } = useClickOutside(el)
</script>
<template>
  <el-space direction="vertical" size="large">
    <div>指令形式:{{ text }}</div>
    <div v-click-outside="handleClickBox" class="flex justify-center items-center w-sm h-12 space-y-4 bg-blue-700 text-gray-50">
      盒子内部,使用directive
    </div>
    <div>Hook形式: {{ isInside ? '点击内部' : '点击外部' }}</div>
    <div ref="el" class="flex justify-center items-center w-sm h-12 space-y-4 bg-green-600 text-gray-50">
      盒子内部,使用Hook
    </div>
  </el-space>
</template>
<style lang='scss' scoped>
</style>
