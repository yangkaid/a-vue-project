<template>
  <div class='p-10 15 bg-white border-b-1 solid #e9e9e9'>
    <div class="text-lg text-blue-500" v-if="title">{{ title }}</div>
    <div class="text-sm" :class="title ? '' : 'mb-10'" v-for="(key, value) of cardLabelMap" :key="key">
      <span>{{ key }}：</span>
      <span class="text-gray-300 mr-5">{{ cardData[value] || '-' }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
// defineProps({
//   title: String,
//   cardData: () => Object,
//   cardLabelMap: () => Object

import { ref } from 'vue';

// })
const title = ref('我是标题')
const cardData = ref({
  name: '张三',
  address: '厦门市',
  phone: '12313',
  email: '123123',
  website: 'www.baidu.com',
  eid: '5dec59e3-2021-4bfb-892f-3f0ed41f59d5&is404=0'
})
const cardLabelMap = ref({
  name: '姓名',
  address: '地址',
  phone: '手机',
  email: '邮箱',
  website: '网址',
  eid: '企业ID'
})
</script>
<style lang='scss' scoped>
</style>
