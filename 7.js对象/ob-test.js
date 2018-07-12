var obj= {
  name:'lilingling',
  age:26
};
var {name,age} = obj;
var {name:nameTest,age} = obj;
console.log(name)
console.log(nameTest)
// 对象解构赋值