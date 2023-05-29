
<template>
  <div>
    <el-row>
      <div class="mr-5">{{ msg }}</div>
      <div class="mr-5" v-for="item in msgArr"> {{ item }}</div>
      <div class="mr-5" v-for="item in memberList">{{ item.name }} -- {{ item.id }}</div>
      <div class="mr-5" v-for="item in list">
        <span>姓名:{{ item.name }}</span>
        <span> 年龄: {{ item.age }}</span>
        <span>分数: {{ item.score }}</span>
        <span>性别: {{ item.sex || '-' }}</span>
      </div>
    </el-row>
    <el-row class="mt-5">
      <el-button @click="change" type="primary">改变</el-button>
      <el-button @click="reset">重置</el-button>
      <el-button @click="changeReactive" type="primary">改变reactive</el-button>
      <el-button @click="resetReactive">重置reactive</el-button>
    </el-row>
    <el-row class="mt-5">
      <div ref="msgdom">123123</div>
    </el-row>
    <el-row class="mt-5">
      <ul>
        <li v-for="(item, index) in todos" :key="item.id">
          {{ item.id }}
          <input type="text" />
          <button @click="deleteTodos(index)">删除</button>
        </li>
      </ul>
      <button @click="addItem">在index为1处增加一项</button>
    </el-row>
    <el-row class="mt-5">
      <div>生命周期</div>
      <el-button id="count" @click="count++">{{ count + 1 }}</el-button>
      <div>{{ count }}</div>
    </el-row>
    <el-row class="mt-5">
      <my-component :text="'helloworld'" ref="component"></my-component>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs, toRef, onMounted, isRef, unref, toRaw, onUpdated } from 'vue';
import MyComponent from './MyComponent.vue';
const msg = ref<string>('hello world')
const msgArr = ['hhh', 'bbb', 'ccc']
interface Member {
  id: number,
  name: string
}
const userInfo = ref<Member>({
  id: 1,
  name: 'yangkai'
})
const memberList = ref<Member[]>([
  {
    name: '123',
    id: 123
  },
  {
    name: '123123123',
    id: 1
  }
])
function change() {
  memberList.value.push(userInfo.value)
}
function reset() {
  memberList.value = [
    {
      name: '123',
      id: 123
    }
  ]
}
// reactive
interface Person {
  name: string,
  age: number,
  score: number,
  sex?: boolean
}
let list = reactive<Person[]>([
  {
    name: 'yangkai',
    age: 16,
    score: 100,
  },
  {
    name: 'zhangsna',
    age: 123,
    score: 900,
    sex: true
  }
])
function changeReactive() {
  list[0].name = 'gaibian'
  list[0].sex = true
  // name失去响应
  let { name } = list[1]
  console.log(name)
  name = '我变了'
  let score = toRef(list[0], 'score')
  console.log(score.value)
  let list0 = toRefs(list[0])
  console.log(list0, list0.name.value)
  list0.name.value = 'xxxxxxx'
  let data = toRaw(list[0])
  console.log(data, 'data')
}
function resetReactive() {
  list.length = 0
  list.push({
    name: 'hhhh',
    age: 123,
    score: 123
  })
}
const msgdom = ref<HTMLElement>()
onMounted(() => {
  // console.log(msgdom.value)
  console.log(component, 'component')
  console.log(component.value.msg)
  component.value.msg = '112312312312'
})
let todos = reactive([
  {
    text: 'learn',
    id: 1
  },
  {
    text: 'hhhh',
    id: 2
  },
  {
    text: 'aaaa',
    id: 3
  }
])
function deleteTodos(index: any) {
  console.log(index)
  todos.splice(index, 1)
  console.log(todos)
}
function addItem() {
  todos.splice(1, 0, { text: 'SAMSUNG', id: 15 })
}
// 生命周期
const count = ref(0)
onUpdated(() => {
  console.log(document.getElementById('count')?.textContent)
})
const component = ref<InstanceType<typeof MyComponent>>()
</script>
<style lang='scss' scoped>
</style>
