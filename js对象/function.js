// 计算 数组中某个值 的数量
const countOccurrences = (arr, value) 
      => arr.reduce((a, v) 
      => v === value ? a + 1 : a + 0, 0);
console.log(countOccurrences([1,1,2,1,2,3], 1)())
 
// array.reduce(function(total, currentValue, currentIndex, arr){}, initialValue)