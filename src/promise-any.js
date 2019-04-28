/**
 * promise-any.js 实现Promise.any函数，类似Promise.all()，但是会忽略掉reject，所以它只需要有resolve的即可。
 * 
 * @example
 * const delay = time => 
 *   new Promise((resolve, reject) => {
 *     setTimeout(()=>{resolve(time);}, time)
 *   })
 * 
 * promiseAny([
 *   Promise.reject(1),
 *   delay(300),
 *   delay(100),
 *   Promise.resolve(4)
 * ]).then( res => {
 *   console.log('one resolved',res) // => [4, 100, 300]
 * });
 * 
 * promiseAny([Promise.reject(1), Promise.reject(2)]).then( res => {
 *   console.log('one resolved')
 * }).catch( err => {
 *   console.log('all rejected') // => all rejected
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
      if(result.length){
        resolve(result)
      }else{
        reject('All rejected')
      }
    })
  )
}

if (!Promise.any) {
  Promise.any = promiseAny
}

export default promiseAny