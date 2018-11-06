/**
 * promise-delay.js promise封装setTimeout延时处理
 * @example
 * const a = promiseDelay(1000).then(()=>{
 *   console.log('done')
 * })
 */

 const promiseDelay = ms => {
   return new Promise( resolve => {
     setTimeout( resolve, ms)
   })
 }

 export default promiseDelay