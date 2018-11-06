/**
 * shuffle.js  数组随机排序（扑克牌算法）
 * @example
 * const a = [1,2,3,4,5]
 * shuffle(a)
 * console.log(a) // => [3, 1, 5, 2, 4]
 */

const shuffle = arr => {
  let i = arr.length, j
  while (i) {
    j = Math.floor(Math.random() * i--); // 这里的分号是必须的
    [arr[j], arr[i]] = [arr[i], arr[j]]   
  }
}

export default shuffle

