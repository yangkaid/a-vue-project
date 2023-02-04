<template>
  <div flex align="center" justify="center">
    <div className="w-auto m-10">
      <div className="border border-solid p-3 font-black">大家好，我是无聊的人</div>
    </div>
    <button bg="blue-400 hover:blue-500" text="sm white" font="mono light" p="y-2 x-4"
      border="2 rounded blue-200">button</button>
    <div text="xl lime-400" md="italic">
      YANG KAI
    </div>
    <div p="x-2 y-1" :border="border" rounded="md" font="mono bold" hover:bg="gray-400 opacity-10" class="grid">
      BOLD MONO
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const border = ref(2)
</script>
<style lang='scss' scoped>

</style>
