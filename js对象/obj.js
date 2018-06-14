var obj = { name: 'ling', age: 11 };
// for in 循环 原型链上所有属性都会被访问到
for (var i in obj) {
  // 自定义属性
  if (obj.hasOwnProperty(i)) {
    console.log('对象i', i)
    console.log('对象obj', obj[i])
  }
}

var arr = [1, 2]
for (var j of arr) {
  console.log('对象j', j)
}

Object.keys(obj).forEach((i, idx) => {
  console.log(obj[i])
})