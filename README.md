
目录
=================

   * [utils](#utils)
      * [说明](#说明)
      * [使用方法](#使用方法)
      * [开发](#开发)
      * [Examples](#examples)
         * [promise-delay.js](#promise-delayjs)
         * [promise-timeout.js](#promise-timeoutjs)
         * [promisify.js](#promisifyjs)
         * [quick-sort.js](#quick-sortjs)
         * [shuffle.js](#shufflejs)
         * [stable-sort.js](#stable-sortjs)
      * [许可证](#许可证)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)
# utils
JavaScript中常用的一些函数
## 说明
此README文档通过执行`npm run readme`命令生成，目录是通过`gh-md-toc`生成。
## 使用方法
- 源文件为ES6语法，你可以单独引入一个文件，也可以copy函数到你自己的文件中。
- 如果你需要ES5语法的代码，你可以通过执行`npm run dev`生成一个`dist/cm-utils.js`文件，然后找到自己想要的函数。
- 如果你需要一份完整的压缩文件，你可以通过执行`npm run build`生成一个`dist/cm-utils.min.js`文件。
## 开发
使用rollup作为打包工具。
- `npm run dev`：启动开发环境。
    - 使用[chokidar](https://github.com/paulmillr/chokidar)监听文件变化，自动执行`npm run readme`重新生成readme文档，自动执行构建指令。
    - ~~使用[rollup-watch](https://www.npmjs.com/package/rollup-watch)实时监听文件变动。~~
- `npm run build`：打包生成目标文件
    - 使用[rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)压缩混淆。
- `npm run readme`：你可以单独执行这个指令，根据源文件注释生成`README.md`使用文档。


## Examples
### promise-delay.js
promise-delay.js promise封装setTimeout延时处理

```javascript
const pdObj = promiseDelay(1000);
pdObj.promise().then(()=>{
  console.log('done')
});

// 取消setTimeout
pdObj.clearTimeout();
```

### promise-timeout.js
promise-timeout.js 简单的超时处理

```javascript
const taskPromise = new Promise( (resolve, reject) => {
  // 任意异步事件
  var time = Math.random() * 2000;
  setTimeout(function(){
    resolve('done');
  }, time);
});
const a = promiseTimeout(taskPromise, 1000).then(() => {
  console.log('done')
}).catch((err) => {
  console.log(err) // err为promiseTimeout抛出的错误
})
```

### promisify.js
promisify.js 把非promise的回调函数A转成promise调用的函数B<br />
A必须遵循：1. 回调函数在主函数中的参数位置必须是最后一个；2. 回调函数参数中的第一个参数必须是 error 。

```javascript
// 原有的callback调用
fs.readFile('test.js', function(err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

// promisify后
var readFileAsync = promisify(fs.readFile);
readFileAsync('test.js').then(data => {
  console.log(data);
}, err => {
  console.log(err);
});
```

### quick-sort.js
quick-sort.js  快排算法

```javascript
const a = [2,13,3,14,5]
const b = quickSort(a)
console.log(b) // => [2,3,5,13,14]
```

### shuffle.js
shuffle.js  数组随机排序（扑克牌算法）

```javascript
const a = [1,2,3,4,5]
shuffle(a)
console.log(a) // => [3, 1, 5, 2, 4]
```

### stable-sort.js
stable-sort.js  稳定排序（Array.prototype.sort是非稳定排序）

```javascript
const a = [2,1,3,4,3]
const b = stableSort(a)
console.log(b) // => [1,2,3,3,4]
```

## 许可证
[MIT](http://opensource.org/licenses/MIT)