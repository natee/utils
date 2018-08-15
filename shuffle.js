/**
 * shuffle.js  数组随机排序（扑克牌算法）
 * @example
 *
 * const a = [1,2,3,4,5]
 * shuffle(a)
 * // => []
 */

const shuffle = arr => {
  let i = arr.length
  let j
  let t
  while (i) {
    j = Math.floor(Math.random() * i--)
    
    t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
}

export default shuffle

