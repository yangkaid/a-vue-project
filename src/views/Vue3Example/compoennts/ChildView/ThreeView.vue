<script lang='ts' setup>
import { inject, ref } from 'vue';
import type { Ref } from 'vue'

interface Props {
  username: string,
  age: number,
  uid: number | string
}
const props =withDefaults(defineProps<Props>(), {
  name: '-',
  age: 0,
  uid: 1111
})
const emits = defineEmits(['update:age'])
let grandMsg : Ref<string> | undefined = inject<Ref<string>>('grandMsg')
// console.log(grandMsg.value)
function change() {
  let age = props.age
  emits('update:age', ++age)
  // grandMsg.value = '123123'
}
</script>
<template>
  <div>
    <span>姓名: {{ username }}</span>
    <span>年龄: {{ age }}</span>
    <span> uid: {{ uid }}</span>
    <el-button @click="change">改变</el-button>
    <span>inject接收的数据:{{ grandMsg }}</span>
  </div>
</template>
<style lang='scss' scoped>
</style>
