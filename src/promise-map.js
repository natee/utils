/**
 * promise-map.js 实现Promise.map函数，对所有promise迭代执行某操作
 * @example
 * promiseMap([Promise.resolve(1), Promise.reject("Oops")], (v) => {
 *   return v * 2
 * }, (v) => {
*   return `err: ${v}`
* }).then( res => {
 *   console.log(res) // => [2, "err: Oops"]
 * });
 */

const promiseMap = (prs, resolveFn, rejectFn) =>
  Promise.all([...prs].map(pr =>
    Promise.resolve(pr).then( res => {
      return resolveFn(res)
    }, err => {
      return rejectFn(err)
    })
  ))

if (!Promise.map) {
  Promise.map = promiseMap
}

export default promiseMap