const fs = require('fs');
const path = require('path');
// 将文件名转换为小驼峰函数
function toSpinalCase(camelCase) {
  const lowerCaseSpinal = camelCase.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).slice(1);
  return lowerCaseSpinal;
}
// 获取plop-templates文件夹下的所有文件名称
function getTemplateNames() {
  const plopTemplatesPath = path.join(__dirname, 'plop-templates');
  const files = fs.readdirSync(plopTemplatesPath);
  const templateNames = files.map((file) => {
    const fileName = file.split('.')[0];
    return fileName;
  });
  return templateNames;
}
let templateNames = getTemplateNames()

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
        type: 'list',
        name: 'template',
        message: '请选择需要的模版文件',
        choices: templateNames
      },
      {
        type: 'input',
        name: 'api',
        message: '请输入api地址',
      }
    ],
    actions: function (data) {
      let actions = []
      const { name, path, api, template } = data
      let lowerCaseSpinalName = toSpinalCase(name)
      if (name) {
        actions.push({
          type: 'add',
          path: `${path}/${name}.vue`,
          templateFile: `plop-templates/${template}.hbs`,
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
