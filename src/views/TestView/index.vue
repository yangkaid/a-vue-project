<template>
  <div class='test-view'>我是测试页面</div>
  <div class="rect-content">
    <div class="rect">响应式1</div>
    <div class="rect">响应式2</div>
    <div class="rect">响应式3</div>
  </div>
  <el-button type="primary" @click="handleClick">提交</el-button>
  <detail-card></detail-card>
</template>
<script setup>
const handleClick = () => {
  ElMessage({
    type: "success",
    message: "复制成功"
  });
}
</script>
<style lang='scss' scoped>
.rect-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.rect {
  flex-grow: 1;
  min-width: 300px;
  height: 200px;
  background-color: var(--el-color-primary);
  padding: 20px;
  font-size: 14px;
}
</style>
