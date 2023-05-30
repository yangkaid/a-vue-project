<template>
  <div>
    <div>computed && watch</div>
    <p>Has published books:</p>
    <span>{{ publishBookMessage }}</span>
    <el-button @click="deleteBooks">删除</el-button>
    <el-button @click="addBooks">增加</el-button>
    <div class="mt-5">watch</div>
    <p>ask a yes/no question</p>
    <el-input v-model="question"></el-input>
    <p>{{ answer }}</p>
    <div class="mt-5">
      <div v-for="msg in msgArr">{{ msg }}</div>
      <div>{{ person.name }}</div>
      <el-button type="primary" @click="handleWatch">handle</el-button>
    </div>
    <div class="mt-5">
      <!-- <p class="msg">Hello World</p> -->
      <el-card>
        <template #header>
          <div class="header">
            <span>卡片名称</span>
            <el-button text>操作按钮</el-button>
          </div>
        </template>
        <div v-for="i in 4" :key="i">{{ 'List item' + i }}</div>
      </el-card>
    </div>
    <div class="mt-5">
      <span>store {{ count }}</span>
    </div>
    <el-divider></el-divider>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { computed, reactive, ref, watch } from 'vue';
import { useMainStore } from '@/stores';
const mainStore = useMainStore()
let count = computed(() => mainStore.count)
const authors = reactive({
  name: 'yangkai',
  books: [
    'vue2',
    'vue3',
    'vue-router'
  ]
})
const publishBookMessage = computed(() => {
  return authors.books.length > 2 ? 'Yes' : 'No'
})
function deleteBooks() {
  authors.books.pop()
}
function addBooks() {
  // 不能直接修改
  // publishBookMessage = 'hahahaha'
  authors.books.push('hahahah')
}
const question = ref('')
const answer = ref('questions usually contain a question mark')
watch(question, async (newValue, oldValue) => {
  if (newValue.indexOf('?') > -1) {
    answer.value = 'thinking'
    try {
      const res = await axios.get('https://yesno.wtf/api')
      console.log(res.data)
      answer.value = res.data.answer
    } catch (error) {
      answer.value = 'error! could not reach the API' + error
    }
  } else {
    answer.value = '----'
  }
})
function handleWatch() {
  msgArr.value.push('msg arr')
  // person.name = 'hahahah'
  person.obj.obj.obj.name = 'dddd'
}
let msgArr = ref(['123', '456', '789'])
interface Person {
  name: string
  age: number,
  desc: string,
  obj: object
}
let person = reactive<Person>({
  name: 'yangkai',
  age: 16,
  desc: 'hahahaha',
  obj: {
    name: 'aaaa',
    obj: {
      name: 'bbbb',
      obj: {
        name: 'ccc'
      }
    }
  }
})
watch(msgArr.value, (newValue) => {
  console.log(newValue, 'msgArr')
})
watch(person, (newValue) => {
  console.log(newValue, 'perosn')
})

// const msgColor = ref('#ff0000')
// setTimeout(() => {
//   msgColor.value = '#000000'
// }, 3000);
</script>
<style lang='scss' scoped>
// .msg {
//   // color: v-bind(msgColor);
// }
:deep(.el-card) {
  .el-card__header {
    padding: 10px;
  }
  .el-card__body {
    padding: 5px;
  }
}
</style>
