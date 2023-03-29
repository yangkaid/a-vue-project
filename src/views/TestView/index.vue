<template>
  <div class='test-view'>我是测试页面</div>
  <div class="rect-content">
    <div class="rect">响应式1</div>
    <div class="rect">响应式2</div>
    <div class="rect">响应式3</div>
  </div>
  <el-button type="primary" @click="handleClick">提交</el-button>
  <van-button type="primary">vant按钮</van-button>
  <DetailCard title="标题" :cardData="cardData" :label="label"></DetailCard>
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
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
const handleClick = () => {
  ElMessage({
    type: "success",
    message: "复制成功"
  });
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
