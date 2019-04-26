/**
 * promise-any.js 实现Promise.any函数，类似Promise.all()，但是会忽略掉reject，所以它只需要有resolve的即可。
 * 
 * @example
 * promiseAny([Promise.reject(1), Promise.resolve(2), Promise.resolve(3)]).then( res => {
 *   console.log('one resolved',res) // [2,3]
 * });
 * 
 * promiseAny([Promise.reject(1), Promise.reject(2)]).then( res => {
 *   console.log('one resolved')
 * }).catch( err => {
 *   console.log('all rejected') // all rejected
 * });
 */

const promiseAny = prs => {
  let result = [];
  return Promise.all([...prs].map(pr => 
    Promise.resolve(pr).then(
      (res) => {
        result.push(res)
      }
    ).catch(e => {})
  )).then(res => 
    new Promise((resolve, reject) => {
      result.length ? resolve(result) : reject()
    })
  )
}

if (!Promise.any) {
  Promise.any = promiseAny
}

export default promiseAny