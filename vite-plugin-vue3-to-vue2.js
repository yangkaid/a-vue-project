module.exports = function () {
  return {
    name: 'vite-plugin-vue3-to-vue2',
    config(config) {
      console.log(JSON.stringify(config))
    },
    configResolved(config) {
      console.log('config执行完毕')
    },
    
    // transform(code, id) {
    //   console.log('id', id)
    //   // console.log('code', code)
    // }
  }
}
