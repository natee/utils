/**
 * stable-sort.js  稳定排序（Array.prototype.sort是非稳定排序）
 * @example
 * const a = [2,1,3,4,3]
 * const b = stableSort(a)
 * console.log(b) // => [1,2,3,3,4]
 */
// 可以把stableSort绑到Array.prototype上，并增加处理函数，
// 但是我不想这样做，适时而定

const stableSort = arr => {
  return arr.map( (v, i) => {
    return [v, i]
  }).sort( (a, b) => {
    if(a[0] === b[0]){
      return a[1] - b[1]
    }
    return a[0] - b[0]
  }).map( v => {
    return v[0]
  })
}

export default stableSort
