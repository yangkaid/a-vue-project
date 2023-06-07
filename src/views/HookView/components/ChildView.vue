<script lang='ts' setup>
import { useVModel } from '@/hooks/useVModel';
interface Props {
  msg: string
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'Hello'
})
const msg = useVModel(props, 'msg')
const change = () => {
  msg.value = msg.value + 'World'
}
</script>
<template>
  <div>
    <span>父组件传来的msg:</span>
    <span>{{ msg }}</span>
    <el-button @click="change">改变</el-button>
  </div>
</template>
<style lang='scss' scoped>
</style>
