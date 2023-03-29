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
  }
]
