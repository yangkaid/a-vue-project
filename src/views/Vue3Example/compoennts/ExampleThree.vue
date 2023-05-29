<script lang='ts' setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
import ChildView from './ChildView/ChildView.vue';
import TwoView from './ChildView/TwoView.vue'
interface Member {
  id: number,
  name: string
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
    let res = await axios.post('/enterprise/basic/list-invest-abroad-page', {
      eid: '534472fd-7d53-4958-8132-d6a6242423d8'
    })
    console.log(res)
    infoList.value = res.data.rows
  } catch (error) {
    console.log(error)
  }
}
getCompanyInfo()
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
  </div>
</template>
<style lang='scss' scoped>
</style>
