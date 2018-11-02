# utils
JavaScript中常用的一些函数
## 函数
### promise-delay.js
promise-delay.js promise封装setTimeout延时处理

```javascript

const a = promiseDelay(1000).then(()=>{
  console.log('done')
})
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

### quick-sort.js
quick-sort.js  快排算法

```javascript

const a = [2,13,3,14,5]
const b = quickSort(a)
// => [2,3,5,13,14]
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
// => [1,2,3,3,4]
```
