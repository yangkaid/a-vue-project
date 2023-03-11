// 将文件名转换为小驼峰函数
function toSpinalCase(camelCase) {
  const lowerCaseSpinal = camelCase.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).slice(1);
  return lowerCaseSpinal;
}

function cli(plop) {
  plop.setGenerator('component', {
    description: '创建一个新的组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件的名称',
      },
      {
        type: 'input',
        name: 'path',
        message: '请输入组件的路径,从根目录开始',
      },
      {
        type: 'input',
        name: 'api',
        message: '请输入api地址',
      }
    ],
    actions: function (data) {
      let actions = []
      const { name, path, api } = data
      let lowerCaseSpinalName = toSpinalCase(name)
      if (name) {
        actions.push({
          type: 'add',
          path: `${path}/${name}.vue`,
          templateFile: 'plop-templates/index.hbs',
          data: {
            name,
            api
          }
        })
        // 给路由文件增加一条路由
        actions.push({
          type: 'modify',
          path: 'src/router/index.js',
          pattern: /(\/\/ plop:route:insert)/gi,
          template: `{
            path: '/${lowerCaseSpinalName}',
            name: '${name}',
            component: () => import('@/views/CompanyInfo/${name}.vue')
          },\n  // plop:route:insert`
        })
      }
      console.log(data)
      return actions
    }
  });
}
module.exports = cli
