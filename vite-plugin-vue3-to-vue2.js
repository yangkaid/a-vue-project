module.exports = function () {
  return {
    name: 'vite-plugin-vue3-to-vue2',
    transform(code, id) {
      console.log('id', id)
      console.log('code', code)
    }
  }
}
