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
defineProps({
  title: String,
  cardData: () => Array,
  cardLabelMap: () => Object
})
</script>
<style lang='scss' scoped>
</style>
