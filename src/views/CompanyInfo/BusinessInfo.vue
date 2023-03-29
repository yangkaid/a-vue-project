<template>
  <div class="BusinessInfo">
    <van-list v-model:loading="loading" :finished="finished" @load="loadList" finished-text="没有更多了">
      <detail-card v-for="(item, index) in list" :key="index" :cardData="item" :label="label" :title="item.title">
      </detail-card>
    </van-list>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
import labelMap from './data/index'
import DetailCard from '../../components/DetailCard.vue';
const currentPage = ref(1)
const pageSize = ref(10)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const label = computed(() => {
  return labelMap['BusinessInfo']
})
const loadList = async () => {
  const { data } = await axios.post('/mock/get-business-list', {
    currentPage: currentPage.value,
    pageSize: pageSize.value
  })
  if (currentPage.value >= data.allPages) {
    finished.value = true
  }
  list.value.push(...data.data)
  currentPage.value++
  loading.value = false
}
</script>
<style lang="scss" scoped>
.BusinessInfo {
  width: 100%;
  height: 500px;
}
</style>
