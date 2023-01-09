<template>
  <el-config-provider :locale="locale">

  </el-config-provider>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <el-row class="mb-4">
    <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
    <el-checkbox v-model="checked2">Not disabled</el-checkbox>
    <el-input v-model="input" placeholder="Please input" />
  </el-row>
  <el-row class="mb-4">
    我发现了一个好东西哈哈哈哈哈哈
    <div>有点东西呀</div>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const locale = ref('zhCN')
const checked1 = ref(false)
const checked2 = ref(false)
const input = ref(123)
console.log(input)
</script>
<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 40px;
}
</style>
