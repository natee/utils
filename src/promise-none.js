/**
 * promise-none.js 实现Promise.none函数，所有promise被拒绝则表示完成
 * @example
 * promiseNone([Promise.reject(1), Promise.reject(2)]).then( res => {
 *   console.log('all rejected')
 * });
 * 
 * promiseNone([Promise.resolve(1), Promise.reject(2)]).then( res => {
 *   console.log('all rejected')
 * }).catch( err => {
 *   console.log('one was not rejected')
 * });
 */

const promiseNone = prs =>
  Promise.all([...prs].map(pr =>
    new Promise((resolve, reject) =>
      Promise.resolve(pr).then(reject, resolve)
    )
  ))

if (!Promise.none) {
  Promise.none = promiseNone
}

export default promiseNone