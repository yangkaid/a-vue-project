<script lang='ts' setup>
import { useUserStore } from '@/stores';
import { useMainStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const userStore = useUserStore()
const mainStore = useMainStore()
const name = computed(() => userStore.name)
const age = computed(() => userStore.doubleAge)
let { count } = storeToRefs(mainStore)
function change() {
  userStore.setName('yangkai')
  userStore.setAge(100)
  count.value = 10000
}
</script>
<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ count }}</div>
    <el-button type="primary" @click="change">改变</el-button>
  </div>
</template>
<style lang='scss' scoped>
</style>
