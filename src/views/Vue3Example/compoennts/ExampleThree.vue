<script lang='ts' setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
import ChildView from './ChildView/ChildView.vue';
import TwoView from './ChildView/TwoView.vue'
import ThreeView from './ChildView/ThreeView.vue';
interface Member {
  id: number | string,
  name: string,
  age?: number,
}
const userInfo = reactive<Member>({
  id: 1,
  name: 'Tom'
})
function update(name: string) {
  userInfo.name = name
}
// 组件2获取企业信息
let infoList = ref([])
async function getCompanyInfo() {
  try {
    let res = await axios.post('/mock/get-company-info', {
      currentPage: 1,
      pageSize: 10
    })
    console.log(res)
    infoList.value = res.data.rows
  } catch (error) {
    console.log(error)
  }
}
setTimeout(() => {
  getCompanyInfo()
}, 4000);
// 组件三
const threeUserInfo = reactive<Member>({
  id: '123123',
  name: '小明',
  age: 24
})
</script>
<template>
  <div>
    <div>props/emit传值</div>
    <div>父组件</div>
    <div>{{ userInfo }}</div>
    <child-view title="用户信息" :index="1" :uid="userInfo.id" :user-name="userInfo.name" @update-name="update"></child-view>
    <el-divider></el-divider>
    <div>接口请求并传值</div>
    <div>父组件</div>
    <two-view :info-list="infoList"></two-view>
    <el-divider></el-divider>
    <div>v-model父子组件传值</div>
    {{ threeUserInfo }}
    <three-view v-model:uid="threeUserInfo.id" v-model:username="threeUserInfo.name"
      v-model:age="threeUserInfo.age"></three-view>
  </div>
</template>
<style lang='scss' scoped>
</style>
