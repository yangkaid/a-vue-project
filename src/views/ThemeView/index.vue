<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary" :icon="Plus">Primary</el-button>
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
    <el-switch v-model="value1" />
    <el-switch v-model="value2" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
  </el-row>
  <el-row class="mb-4">
    <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
    <el-checkbox v-model="checked2">Not disabled</el-checkbox>
    <el-input v-model="input" placeholder="Please input" />
  </el-row>
  <el-divider></el-divider>
  <el-row class="mb-4">
    <div>改变主题色</div>
    <div class="rect"></div>
    <el-color-picker v-model="color" @active-change="changeColor" />
  </el-row>
  <el-row class="mb-4">
    <el-button type="primary" @click="handleOpen">打开弹窗</el-button>
    <CustomDialog v-model:dialogVisible="visible"></CustomDialog>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import { colorMix } from '@/utils/index'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Plus
} from '@element-plus/icons-vue'
import CustomDialog from './components/CustomDialog.vue';
const checked1 = ref(false)
const checked2 = ref(false)
const input = ref(123)
const value1 = ref(false)
const value2 = ref(true)
const color = ref('#3860F4')
const changeColor = (value => {
  function setCssvar(prop, val, dom = document.documentElement) {
    dom.style.setProperty(prop, val)
  }
  setCssvar('--el-color-primary', value)
  setCssvar('--el-color-primary-light-3', colorMix(value, '#ffffff', 0.3))
  setCssvar('--el-color-primary-light-5', colorMix(value, '#ffffff', 0.5))
  setCssvar('--el-color-primary-light-7', colorMix(value, '#ffffff', 0.7))
  setCssvar('--el-color-primary-light-8', colorMix(value, '#ffffff', 0.8))
  setCssvar('--el-color-primary-light-9', colorMix(value, '#ffffff', 0.9))
  setCssvar('--el-color-primary-dark-2', colorMix(value, '#000000', 0.2))
})
const visible = ref(false)
const handleOpen = () => {
  visible.value = true
}


</script>

<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 40px;
}
.rect {
  width: 100px;
  height: 100px;
  background-color: var(--el-color-primary);
}
</style>
