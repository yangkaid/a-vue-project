<template>
  <div class='test-view'>我是测试页面</div>
  <div class="rect-content">
    <div class="rect">响应式1</div>
    <div class="rect">响应式2</div>
    <div class="rect">响应式3</div>
    <div class="rect">响应式4</div>
  </div>
</template>
<script setup></script>
<style lang='scss' scoped>
.rect-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.rect {
  flex-shrink: 1;
  min-width: 300px;
  height: 200px;
  background-color: var(--el-color-primary);
  padding: 20px;
  font-size: 14px;
}
</style>
