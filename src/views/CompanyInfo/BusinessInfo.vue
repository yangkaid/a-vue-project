<template>
  <div class="'BusinessInfo'">
    <!-- <van-list v-model="loading" :finished="finished" @load="loadList">
      <detail-card v-for="(item, index) in list" :key="index" :cardData="item" :cardLabelMap="label"></detail-card>
    </van-list> -->
    <detail-card></detail-card>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
// import labelMap from './data/index'
const currentPage = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const finished = ref(false)
const list = ref([
  {
    name: '张三',
    address: '厦门市',
    phone: '12313',
    email: '123123',
    website: 'www.baidu.com'
  },
  {
    name: '张三',
    address: '厦门市',
    phone: '12313',
    email: '123123',
    website: 'www.baidu.com'
  }
])
const labelMap = ref({
  name: '姓名',
  address: '地址',
  phone: '手机',
  email: '邮箱',
  website: '网址',
})
// const label = computed(() => labelMap['BusinessInfo'])
const loadList = async () => {
  const { data } = await axios.post('/api/fetch', {
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
