<template>
  <div class='p-2 2 2 2 bg-white border-b-1 solid #e9e9e9'>
    <div class="text-lg text-blue-500" v-if="title">{{ title }}</div>
    <div class="text-sm" :class="title ? '' : 'mb-1'" v-for="(key, value) of label" :key="key">
      <span>{{ key }}：</span>
      <span class="text-gray-300 mr-5">{{ cardData[value] || '-' }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  cardData: {
    type: Object,
    default: () => {}
  },
  label: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang='scss' scoped>
</style>
