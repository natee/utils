const readmeDescription = [
  '# utils',
  'JavaScript中常用的一些函数',
  '## 说明',
  '此README文档通过执行`npm run readme`命令生成，目录是通过`gh-md-toc`生成。',
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
  '- `npm run dev`：启动开发环境。',
  '    - 使用[chokidar](https://github.com/paulmillr/chokidar)监听文件变化，自动执行`npm run readme`重新生成readme文档，自动执行构建指令。',
  '    - ~~使用[rollup-watch](https://www.npmjs.com/package/rollup-watch)实时监听文件变动。~~',
  '- `npm run build`：打包生成目标文件',
  '    - 使用[rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)压缩混淆。',
  '- `npm run readme`：你可以单独执行这个指令，根据源文件注释生成`README.md`使用文档。',
  '\n',
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