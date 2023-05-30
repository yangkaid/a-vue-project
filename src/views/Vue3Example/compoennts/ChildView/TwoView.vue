<script lang='ts' setup>
interface InfoListItem {
  businessStatus: string,
  investEid: string,
  isHistory: string,
  name: string,
  operName: string,
  regisCapi: string,
  shouldCapiConv: string,
  startDate: string,
  stockPercent: string
}
interface Props {
  infoList: InfoListItem[]
}
const props = withDefaults(defineProps<Props>(), {
  infoList: () => []
})
const tableConfig = [
  {
    prop: 'name',
    label: '企业名称'
  },
  {
    prop: 'isHistory',
    label: '是否历史记录',
  },
  {
    prop: 'operName',
    label: '实控人'
  },
  {
    prop: 'businessStatus',
    label: '状态'
  },
  {
    prop: 'registCapi',
    label: '注册资本'
  },
  {
    prop: 'shouldCapiConv',
    label: '投资数额'
  },
  {
    prop: 'startDate',
    label: '开始时间'
  },
  {
    prop: 'stockPercent',
    label: '投资占比'
  }
]
</script>
<template>
  <div>
    <div>子组件</div>
    <el-table :data="infoList" border>
      <template v-for="item in tableConfig" :key="item.label">
        <el-table-column v-if="item.prop === 'isHistory'" :prop="item.prop" :label="item.label">
          <template #default="{ row }">
            <span>{{ +row[item.prop] === 0 ? '否' : '是' }}</span>
          </template>
        </el-table-column>
        <el-table-column v-else :prop="item.prop" :label="item.label"></el-table-column>
      </template>
    </el-table>
    <el-pagination class="mt-4" background layout="->, total, sizes, prev, pager, next" :total="1000" :page-sizes="[5,10,20]"></el-pagination>
  </div>
</template>
<style lang='scss' scoped>
</style>
