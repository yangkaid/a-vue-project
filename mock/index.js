import { Random } from "mockjs"
export default [
  {
    url: '/mock/get-business-list',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '接口请求成功',
        allPages: 1,
        data: [
          {
            name: '张三',
            age: 20,
            sex: '男',
            address: '厦门国际',
            phone: '123123213',
            title: '标题'
          },
          {
            name: '张三',
            age: 20,
            sex: '男',
            address: '厦门国际',
            phone: '123123213',
            title: '标题'
          },
          {
            name: '张三',
            age: 20,
            sex: '男',
            address: '厦门国际',
            phone: '123123213',
            title: '标题'
          },
          {
            name: '张三',
            age: 20,
            sex: '男',
            address: '厦门国际',
            phone: '123123213',
            title: '标题'
          },
        ]
      }
    }
  },
  {
    url: '/mock/get-case-list',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '成功',
        allPages: 1,
        data: [
          {
            title: '立案信息',
            startDate: '2022-01-01',
            hearingDate: '2023-11-11',
            endDate: '2133-01-01'
          },
          {
            title: '立案信息',
            startDate: '2022-01-01',
            hearingDate: '2023-11-11',
            endDate: '2133-01-01'
          },
          {
            title: '立案信息',
            startDate: '2022-01-01',
            hearingDate: '2023-11-11',
            endDate: '2133-01-01'
          },
          {
            title: '立案信息',
            startDate: '2022-01-01',
            hearingDate: '2023-11-11',
            endDate: '2133-01-01'
          },
        ]
      }
    }
  },
  {
    url: '/mock/get-company-info',
    method: 'post',
    response: ({ body }) => {
      const { pageSize, currentPage } = body
      let arr = []
      for(let i = 0; i < 50; i++) {
        let mockData = {
          businessStatus: Random.ctitle(4),
          investEid: "8f67f5c0-11df-4935-b18a-fc25f9c5299a",
          isHistory: "0",
          name: Random.ctitle(),
          operName: Random.cname(),
          registCapi: `${Random.float(0, 1000, 2, 2)}万元人名币`,
          shouldCapiConv: `${Random.float(0, 1000, 2, 2)}万元人名币`,
          startDate: Random.date(),
          stockPercent: `${Random.float(0, 100, 2, 2)}%`,
        }
        arr.push(mockData)
      }
      return {
        code: 200,
        message: '成功',
        total: arr.length,
        rows: arr.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      }
    }
  }
]
