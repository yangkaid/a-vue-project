<template>
  <div>{{ text }}</div>
  <div>{{ msg }}</div>
</template>
<script setup>
import { ref } from 'vue';

defineProps({
  text: {
    type: String
  }
})
const msg = ref('hahahaha')
defineExpose({
  msg
})

</script>
<style lang='scss' scoped>
</style>
