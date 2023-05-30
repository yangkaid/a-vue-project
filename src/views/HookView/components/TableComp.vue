<script lang="ts" setup>
import { useTable } from '@/hooks/useTable';
import axios from 'axios';
function getTableData(data: any) {
  return axios({
    url: '/mock/get-company-info',
    method: 'post',
    data
  })
}
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
const { tableData, loading, total, currentPage, pageSize } = useTable('/mock/get-company-info', {
  eid: '123123123'
})
</script>
<template>
  <div>
    <el-table :data="tableData" border v-loading="loading" max-height="600px">
      <template v-for="item in tableConfig" :key="item.label">
        <el-table-column v-if="item.prop === 'isHistory'" :prop="item.prop" :label="item.label">
          <template #default="{ row }">
            <span>{{ +row[item.prop] === 0 ? '否' : '是' }}</span>
          </template>
        </el-table-column>
        <el-table-column v-else :prop="item.prop" :label="item.label"></el-table-column>
      </template>
    </el-table>
    <el-pagination class="mt-4" background layout="->, total, sizes, prev, pager, next" :total="total"
      v-model:page-size="pageSize" v-model:current-page="currentPage" :page-sizes="[5, 10, 20]"></el-pagination>
  </div>
</template>
<style lang='scss' scoped>
.main {
  height: calc(100vh - 120px);
}
</style>
