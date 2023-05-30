import axios from "axios";
import { ref, watchEffect } from 'vue'
type useTableFn = (url: string, params?: object) => {
  tableData: any,
  loading: any,
  currentPage: any,
  pageSize: any,
  total: any,
}
export const useTable: useTableFn = (url, params = {}) => {
  let tableData = ref([])
  let loading = ref(true)
  let currentPage = ref(1)
  let pageSize = ref(10)
  let total = ref(0)
  async function run() {
    try {
      loading.value = true
      let res = await axios.post(url, {
        currentPage: currentPage.value,
        pageSize: pageSize.value,
        ...params
      })
      tableData.value = res.data.rows || []
      total.value = res.data.total || 0
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  watchEffect(() => {
    run()
  })
  return {
    tableData: tableData,
    loading: loading,
    currentPage: currentPage,
    pageSize: pageSize,
    total: total,
  }
}
