const readmeDescription = [
  '# utils',
  'JavaScript中常用的一些函数',
  '## 说明',
  '此README文档通过执行`npm run readme`命令生成',
];

const readmeUsage = [
  '## 使用方法',
  '- 源文件为ES6语法，你可以单独引入一个文件，也可以copy函数到你自己的文件中。',
  '- 如果你需要ES5语法的代码，你可以通过执行`npm run dev`生成一个`dist/cm-utils.js`文件，然后找到自己想要的函数。',
  '- 如果你需要一份完整的压缩文件，你可以通过执行`npm run build`生成一个`dist/cm-utils.min.js`文件。',
];

const readmeDevelop = [
  '## 开发',
  '使用rollup作为打包工具。',
  '- `npm run dev`：开发环境。',
  '    - 使用[rollup-watch](https://www.npmjs.com/package/rollup-watch)实时监听文件变动。',
  '- `npm run build`：打包生成目标文件',
  '    - 使用[rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)压缩混淆。',
  '- `npm run readme`：根据源文件注释生成`README.md`使用文档。',
  '\n',
  '代码提交前先手动执行一下`npm run readme`，后续增加自动执行。'
];

const readmeLicense = [
  '## 许可证',
  '[MIT](http://opensource.org/licenses/MIT)',
];

module.exports = {
  readmeDescription,
  readmeUsage,
  readmeLicense,
  readmeDevelop,
}