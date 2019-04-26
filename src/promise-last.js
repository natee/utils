/**
 * promise-last.js 实现Promise.last函数，返回最后一个resolve的promise结果
 * 
 * @description 实现思路：promiseAny()的最后一个则为last
 * 
 * @example
 * const delay = time => 
 *   new Promise((resolve, reject) => {
 *     setTimeout(()=>{resolve(time);}, time)
 *   })
 * 
 * promiseLast([
 *   Promise.reject(1),
 *   delay(300),
 *   delay(100),
 *   Promise.resolve(4)
 * ]).then( res => {
 *   console.log('one resolved', res) // => 300, not 4
 * });
 * 
 * promiseLast([Promise.reject(1), Promise.reject(2)]).then( res => {
 *   console.log('one resolved')
 * }).catch( err => {
 *   console.log('all rejected') // => all rejected
 * });
 */

import promiseAny from './promise-any';

const promiseLast = prs =>
  promiseAny([...prs]).then(res => Promise.resolve(res[res.length - 1]))

if (!Promise.last) {
  Promise.last = promiseLast
}

export default promiseLast