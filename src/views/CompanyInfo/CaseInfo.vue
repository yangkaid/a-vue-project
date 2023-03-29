<template>
  <div class="CaseInfo">
    <van-list v-model="loading" :finished="finished" @load="loadList" finished-text="没有更多了">
      <detail-card v-for="(item, index) in list" :key="index" :cardData="item" :title="item.title" :label="label"></detail-card>
    </van-list>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
import labelMap from './data/index'
const currentPage = ref(1)
const pageSize = ref(10)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const label = computed(() => {
  return labelMap['CaseInfo']
})
const loadList = async () => {
  const { data } = await axios.post('/mock/get-case-list', {
      currentPage: currentPage.value,
      pageSize: pageSize.value
  })
  if (currentPage.value >= data.allPages) {
    finished.value = true
  }
  list.value = list.value.concat(data.data)
  currentPage.value++
  loading.value = false
}
</script>
