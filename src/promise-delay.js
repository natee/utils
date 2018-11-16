/**
 * promise-delay.js promise封装setTimeout延时处理
 * @example
 * const pdObj = promiseDelay(1000);
 * pdObj.promise().then(()=>{
 *   console.log('done')
 * });
 * 
 * // 取消setTimeout
 * pdObj.clearTimeout();
 */

const promiseDelay = ms => {
  let timeout

  return {
    promise: () => {
      return new Promise( resolve => { 
        timeout = setTimeout( resolve, ms)
      })
    },
    clearTimeout: () => clearTimeout(timeout)
  }
}

 export default promiseDelay