<template>
  <div class='common-directive'>
    <div class="auth">
      <h3>按钮权限指令</h3>
      <el-button type="primary" v-auth="['add']">增加按钮</el-button>
    </div>
    <el-divider></el-divider>
    <div class="copy">
      <h3>复制文字指令</h3>
      <div>{{ copyData }}</div>
      <el-button v-copy="copyData">复制文字</el-button>
    </div>
    <el-divider></el-divider>
    <div class="debounce">
      <h3>按钮防抖节流指令</h3>
      <el-button v-debounce="handelClick" type="primary">防抖提交</el-button>
      <el-button type="primary" v-throttle="handelClick">节流提交</el-button>
    </div>
    <el-divider></el-divider>
    <h3>拖拽指令</h3>
    <div class="draggable">
      <div class="content" v-draggable>拖拽这个元素</div>
    </div>
    <el-divider></el-divider>
    <div class="dom2png">
      <h3>DOM元素转图片</h3>
      <div class="element" v-dom2png="screenshot">我是一个文字</div>
      <el-button type="primary" @click="shootDown" class="mt-3">截图</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const copyData = ref('我是复制的文字')
const handelClick = () => {
  ElMessage({
    type: "success",
    message: "点击按钮"
  });
}
const screenshot = ref(false)
const shootDown = () => {
  screenshot.value = !screenshot.value
  console.log(screenshot.value)
}
</script>
<style lang='scss' scoped>
.common-directive {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;

  .draggable {
    width: 100%;
    height: 200px;
    border: 1px solid var(--el-color-primary);
    position: relative;

    .content {
      width: 50px;
      height: 50px;
      background-color: var(--el-color-primary);
      text-align: middle;
    }
  }

  .element {
    width: 200px;
    height: 200px;
    background-color: var(--el-color-primary);
    color: red;
  }
}
</style>
