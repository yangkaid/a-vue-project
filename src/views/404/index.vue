<template>
  <div class='error'>该页面未找到</div>
  <svg-icon name="404" :icon-style="svgSize"></svg-icon>
</template>
<script setup>
import SvgIcon from '../../components/SvgIcon.vue';
const svgSize = {
  width: '500px',
  height: '500px'
}
</script>
<style lang='scss' scoped>
</style>
