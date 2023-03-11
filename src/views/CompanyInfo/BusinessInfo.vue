<template>
  <div>
    <!-- <van-list v-model="loading" :finished="finished" @load="loadList">
      <title-card v-for="(item, index) in list" :key="index" :cardData="item" :cardLabelMap="label"></title-card>
    </van-list> -->
    123123
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'
import labelMap from './data/index'
const currentPage = ref(1)
const pageSize = ref(10)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const loadList = async () => {
  const { data } = await axios.post('/api/business-info', {
      currentPage: currentPage.value,
      pageSize: pageSize.value
  })
  if (data.length < pageSize.value) {
    finished.value = true
  }
  list.value = list.value.concat(data)
  currentPage.value++
  loading.value = false
}
</script>
