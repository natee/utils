/**
 * promise-first.js 实现Promise.first函数，返回第一个resolve的promise结果
 * 
 * @description 实现思路：拒绝promiseNone则表示至少有一个promise是resolve状态，我个人认为这个叫做Promise.one或Promise.some更合适
 * 
 * @example
 * promiseFirst([Promise.resolve(1), Promise.resolve(2)]).then( res => {
 *   console.log('one resolved', res) // 1, not [1,2]
 * });
 * 
 * promiseFirst([Promise.reject(1), Promise.reject(2)]).then( res => {
 *   console.log('one resolved')
 * }).catch( err => {
 *   console.log('all rejected')
 * });
 */

import promiseNone from './promise-none';

const promiseFirst = prs =>
  new Promise((resolve, reject) => 
    Promise.resolve(promiseNone([...prs])).then(reject, resolve) // 这里和PromiseNone是重复代码
  )

if (!Promise.any) {
  Promise.any = promiseFirst
}

export default promiseFirst