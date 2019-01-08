var obj = { name: 1, age: '11' }
var obj2 = { ...obj }
console.log(obj2)
let s = '_stage'
let obj3 = {
  j: s === 'production' ? '' : s === 'test' ? '_test' : '_stage'
}
console.log(obj3)
