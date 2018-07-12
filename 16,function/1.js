// 纯函数
var arr = [1,3,4,5]
var sliceRes = arr.slice(1,3); // 数组截取，包括开始，不包括结束
console.log(arr,sliceRes); // 纯函数不会对元数组造成影响
/**
 * splice 
 * 第一参数删除添加位置
 * 第二个参数为0 不删除 删除数量
 * 第三个添加的项目
 */
var spliceRes = arr.splice(0,1); // 0 位置删除一个 返回删除位置的数组，影响元数组 
console.log(spliceRes,arr)

