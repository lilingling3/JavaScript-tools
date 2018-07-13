// 数组去重
let arr = [0,0,1];
function unique (arr) {
  var res = arr.filter(function (item, index, array) {
    // 返回第一次出现的位置
      console.log(array.indexOf(item));
      return array.indexOf(item) === index;
  })
  return res;
}

function unique2(){
  return [... new Set(arr)];
}

var arr2 = unique2(arr);
console.log(arr2)

//最大
var arr4 = [6, 4, 1, 8, 2, 11, 3];
function max (prev, next) {
    return Math.max(prev, next)
}
console.log(arr4.reduce(max));

var arr5 = [6, 4, 1, 8, 2, 11, 3];
function max2 (arr) {
    // console.log(...arr)
    return Math.max(...arr);
}
console.log(max2(arr5));