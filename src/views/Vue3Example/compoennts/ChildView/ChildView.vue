<script lang='ts' setup>
interface Props {
  title: string,
  index: number,
  uid: string | number,
  userName: string
}
const props = withDefaults(defineProps<Props>(), {
  uid: 0,
  userName: 'moren'
})
const emit = defineEmits(['update-name'])
function changeData() {
  emit('update-name', 'YANGKAI')
}
</script>
<template>
  <div class='child'>
    <div>子组件</div>
    <div class="flex">
      <span>标题: {{ title }}</span>
      <span>序号: {{ index }}</span>
      <span>id: {{ uid }}</span>
      <span>姓名: {{ userName }}</span>
      <el-button @click="changeData">改变数据</el-button>
    </div>
  </div>
</template>
<style lang='scss' scoped>
</style>
