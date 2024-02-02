<template>
  <div class='test-view'>我是测试页面</div>
  <div class="rect-content">
    <div class="rect">响应式1</div>
    <div class="rect">响应式2</div>
    <div class="rect">响应式3</div>
  </div>
  <el-button type="primary" @click="handleClick">提交</el-button>
  <van-button type="primary" @click="changeMockList">vant按钮</van-button>
  <DetailCard title="标题" :cardData="cardData" :label="label"></DetailCard>
  <el-divider></el-divider>
  <div v-for="item in mockList" :key="item.id">
    <span>{{ item.name }}</span>
    <span>{{ item.age }}</span>
  </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';
onMounted(async () => {
  let data = await axios.post('/mock/get-business-list')
  console.log(data)
})
const cardData = ref({
  name: '杨凯',
  address: '12313',
  phone: '123313123'
})
const label = ref({
  name: '姓名',
  address: '地址',
  phone: '电话'
})
const handleClick = () => {
  ElMessage({
    type: "success",
    message: "复制成功"
  });
}

const mockList = ref([
  {
    id: 1,
    name: 'yangkai',
    age: 15
  },
  {
    id: 2,
    name: 'hahaha',
    age: 22
  },
  {
    id: 3,
    name: 'bababa',
    age: 99
  }
])
function changeMockList() {
  const list = [
    {
      id: 4,
      name: 'qwer',
      age: 55
    },
    {
      id: 5,
      name: 'tyur',
      age: 88
    },
    {
      id: 6,
      name: 'zxcv',
      age: 55
    }
  ]
  mockList.value = mockList.value.filter(item => item.id === 1)
}
</script>
<style lang='scss' scoped>
.rect-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.rect {
  flex-grow: 1;
  min-width: 300px;
  height: 200px;
  background-color: var(--el-color-primary);
  padding: 20px;
  font-size: 14px;
}
</style>
