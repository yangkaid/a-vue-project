<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>

</template>

<script setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>
<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 40px;
}
</style>
