//对象拷贝
//浅拷贝 只拷贝对象自身属性，不会继承
function shallowCopy(obj) {
  if (typeof obj !== 'object') {
    return
  }
  var newObj = obj instanceof Array ? [] : {}
  
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  // Object.keys(obj).forEach((key) => {
  //   newObj[key] = obj[key]
  // })

  return newObj
}

let foo = {
  a: 1,
  b: 2,
  c: {
      d: 1,
  }
}

// var bar = shallowCopy(foo);
// console.log(foo.a) // 2
// console.log(bar.a) // 2

let bar = {};
Object.assign(bar, foo);
foo.a++;
console.log(foo.a) // 2
console.log(bar.a) // 1

// 深拷贝
let foo1 = {
  x: 1,
  y: -1
}
let bar1 = foo1;
foo1.x++;
console.log(foo1.x) // 2
console.log(bar1.x) // 2

// json序列化 深拷贝
let foo3 = {
  a: 1,
  b: {
      c: 1
  }
}
let bar3 = JSON.parse(JSON.stringify(foo3)); // 伟大的用处
foo3.a ++;
console.log(foo3.a) // 2
console.log(bar3.a) // 1