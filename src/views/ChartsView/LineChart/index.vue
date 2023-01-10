<template>
  <div class="line-chart" ref="line"></div>
  <el-button type="primary" @click="changeData">改变数据</el-button>
</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import { randomArray } from '../../../utils/index'
const commonOptions = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'line',
      name: '销量一',
      datasetIndex: 0,
      dimension: ['name', 'value'],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(100, 143, 255, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(100,143,255,0.1)'
            }
          ],
          golbal: false
        }
      },
      lineStyle: {
        color: '#3673e8'
      },
      itemStyle: {
        color: '#3673e8',
        shadowcolor: '#3673e8'
      }
    },
    {
      type: 'line',
      name: '销量二',
      datasetIndex: 1,
      dimension: ['name', 'value'],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(100, 143, 255, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(100,143,255,0.1)'
            }
          ],
          golbal: false
        }
      },
      lineStyle: {
        color: '#3673e8'
      },
      itemStyle: {
        color: '#3673e8',
        shadowcolor: '#3673e8'
      }
    }
  ],
}
const line = ref(null)
let lineChart = {}
const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const yAxisData1 = [820, 932, 901, 934, 1290, 1330, 1320]
const yAxisData2 = [20, 32, 90, 93, 190, 130, 120]
const formatData = (data) => {
  return xAxisData.map((item, index) => {
    return {
      name: item,
      value: data[index]
    }
  })
}
let source1 = formatData(yAxisData1)
let source2 = formatData(yAxisData2)
const dataset = ref([])
dataset.value.push({
  source: source1
},
  {
    source: source2
  })
console.log(dataset.value)
commonOptions.dataset = dataset.value
onMounted(() => {
  lineChart = echarts.init(line.value)
  lineChart.setOption(commonOptions)
})
// 改变echarts数据
const changeData = () => {
  let data1 = randomArray(xAxisData.length, 10, 100)
  let data2 = randomArray(xAxisData.length, 10, 100)
  // let source1 = formatData(data1)
  // let source2 = formatData(data2)
  let source1 = xAxisData.map((item, index) => {
    return {
      name: item,
      value: data1[index]
    }
  })
  let source2 = xAxisData.map((item, index) => {
    return {
      name: item,
      value: data2[index]
    }
  })
  dataset.value = []
  dataset.value.push({
    source: source1
  },
    {
      source: source2
    })
  commonOptions.dataset = dataset.value
  lineChart.setOption(commonOptions)
}

</script>
<style lang="scss" scoped>
.line-chart {
  width: 900px;
  height: 400px;
  // background-color: var(--el-color-primary);
  margin: 30px 0px 0px 30px;
}
</style>
