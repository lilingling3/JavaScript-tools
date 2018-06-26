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
foo3.a++;
console.log(foo3.a) // 2
console.log(bar3.a) // 1

// 判断是否是对象
function isObj(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

// 特殊对象的拷贝
const objSpecial = {
  arr: [111, 222],
  obj: { key: '对象' },
  a: () => { console.log('函数') },
  date: new Date(),
  reg: /正则/ig
}
/**
 * 使用弊端
 * obj中的普通对象和数组都能拷贝，然而date对象成了字符串，函数直接就不见了，正则成了一个空对象
 */
var objSpecialCopy = JSON.parse(JSON.stringify(objSpecial));


// 只解决date，reg类型，其他的可以自己添加
// 结构化拷贝
function deepCopy(obj, hash = new WeakMap()) {
  let cloneObj
  let Constructor = obj.constructor
  switch (Constructor) {
    case RegExp:
      cloneObj = new Constructor(obj)
      break
    case Date:
      cloneObj = new Constructor(obj.getTime())
      break
      // 增加函数类型
    case Function:
      cloneObj = eval(obj.toString())
      break

    default:
      if (hash.has(obj)) return hash.get(obj)
      cloneObj = new Constructor()
      hash.set(obj, cloneObj)
  }
  for (let key in obj) {
    cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key];
  }
  return cloneObj
}


