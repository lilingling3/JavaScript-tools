
var obj = {a: 1, b: 2, c: { a: 3 },d: [4, 5]}
var obj1 = obj
var obj2 = JSON.parse(JSON.stringify(obj))//深拷贝常用方法
var obj3 = {...obj} // 浅拷贝 引用不会拷贝
var obj4 = Object.assign({},obj) // 浅拷贝 引用不会拷贝
obj.a = 999
obj.c.a = -999
obj.d[0] = 123
console.log(obj1) //{a: 999, b: 2, c: { a: -999 },d: [123, 5]}
console.log(obj2) //{a: 1, b: 2, c: { a: 3 },d: [4, 5]}
console.log(obj3) //{a: 1, b: 2, c: { a: -999 },d: [123, 5]}
console.log(obj4) //{a: 1, b: 2, c: { a: -999 },d: [123, 5]}


// 定义函数 返回函数
function test(id,cb){
  if(id){
    cb(id)
  }
};

test(2,function(id){
  console.log(id)
})

try{
  console.log('try')
}
finally{
  console.log('finally')
}
// catch{
//   console.log('catch')
// }

// reduce 数组求和
var arrRe = [0,1,2,3];
var rs = arrRe.reduce((a,b)=>a+b);
console.log(rs)