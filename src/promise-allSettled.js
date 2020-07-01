/**
 * promise-allSettled.js 实现Promise.allSettled函数，类似Promise.all()，但是结果同时包含resolve和reject。
 * 对于每个结果对象，都有一个status 字符串。如果状态为fulfilled，则存在一个value 。如果状态为rejected，则说明原因 。
 * 
 * @example
 * const delay = time => 
 *   new Promise((resolve, reject) => {
 *     setTimeout(()=>{resolve(time);}, time)
 *   })
 * 
 * promiseAllSettled([
 *   Promise.reject(1),
 *   delay(300),
 *   delay(100),
 *   Promise.resolve(4)
 * ]).then( res => {
 *   console.log(res) // => 1, 300, 100, 4
 * });
 * 
 * promiseAllSettled([Promise.reject(1), Promise.resolve(2)]).then( res => {
 *   console.log(res)
 * })
 */

const promiseAllSettled = prs => {
  let result = []

  return Promise.all([...prs].map((pr, prIndex) =>
    Promise.resolve(pr).then(res => {
      result[prIndex] = {
        status: 'fulfilled',
        value: res
      }
    }, err => {
      result[prIndex] = {
        status: 'rejected',
        value: err
      }
    })
  )).then(res => {
    return new Promise((resolve, reject) => {
      resolve(result)
    })
  })
}

if (!Promise.allSettled) {
  Promise.allSettled = promiseAllSettled
}

export default promiseAllSettled