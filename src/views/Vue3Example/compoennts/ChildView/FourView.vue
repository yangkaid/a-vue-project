<script lang="ts" setup>
const props = defineProps({
  name: String,
  age: Number,
  obj: Object
})
console.log(props, 'props')
const changeObj = () => {
  props.obj.address = props.name += "上海";
  props.obj.children.desc = '修改描述'
}
</script>
<template>
  <div class="four-view">
    <span>姓名：{{ name }}</span>
    <span>年龄：{{ age }}</span>
    <span>地址：{{ obj }}</span>
    <span>{{ obj.children.desc }}</span>
    <el-button @click="changeObj"></el-button>
  </div>
</template>
<style lang="scss" scoped></style>
