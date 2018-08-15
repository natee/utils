/**
 * quick-sort.js  快排算法
 * @example
 *
 * const a = [2,13,3,14,5]
 * const b = quickSort(a)
 * // => [2,3,5,13,14]
 */

const quickSort = arr => {
  const len = arr.length
  let left = []
  let right = []

  if (len === 0) {
    return arr
  }

  const t = arr[0]
  for (let i = 1; i < len; i++) {
    const c = arr[i]
    if (c <= t) {
      left.push(c)
    } else {
      right.push(c)
    }
  }

  left = quickSort(left)
  right = quickSort(right)

  return left.concat(t, right)
}

export default quickSort
