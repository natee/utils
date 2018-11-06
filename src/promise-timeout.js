/**
 * promise-timeout.js 简单的超时处理
 * @example
 * const taskPromise = new Promise( (resolve, reject) => {
 *   // 任意异步事件
 *   var time = Math.random() * 2000;
 *   setTimeout(function(){
 *     resolve('done');
 *   }, time);
 * });
 * const a = promiseTimeout(taskPromise, 1000).then(() => {
 *   console.log('done')
 * }).catch((err) => {
 *   console.log(err) // err为promiseTimeout抛出的错误
 * })
 */

import promiseDelay from './promise-delay';

const promiseTimeout = (task, ms) => {
  const timeout = promiseDelay(ms).then(() => {
    throw new Error(`超时${ms}ms`)
  });

  return Promise.race([task, timeout])
}

export default promiseTimeout