// var obj = {"dealerCode":"20002132-A","campaignCode":"PGCN-M-E3-2018-X","lastName":"存储","gender":"先生","firstName":"1522","mobilePhone":"15222333444","description":""};
// // console.log(obj.hasOwnProperty('_id'))
// // console.log(obj instanceof Object)
// // console.log(typeof obj) // object

// const querystring = require('querystring');

// var obj2 = querystring.parse(obj); 
// // Object.setPrototypeOf(obj2,{}); //解决问题
// console.log(obj2 instanceof Object); // false
// console.log(obj2 ); // false
// console.log(typeof obj2) // object

// console.log(obj2.hasOwnProperty('_id'))  // hasOwnProperty undefined

// var data = Object.create(null);  //typeof null == 'object' 
// var data1 = Object.create({});  //typeof null == 'object' 
// console.log(data1.hasOwnProperty('a'));  // 通过
// console.log(data.hasOwnProperty('a'));  //报错
// console.log(Object.prototype.hasOwnProperty.call(data, 'a')); // false 


// 创建对象
var Base = function () {}
var o1 = new Base(); // new 必须是function定义
var o1 = new Object();
o1.__proto__ = Base.prototype;
Base.call(o1);


var o2 = Object.create(Base);

Object.create =  function (o) { //function 定义跟object定义
  var F = function () {};
  F.prototype = o;
  return new F();
};

var Base = function () {
  this.a = 2
}

var o1 = new Base(); 
var o2 = Object.create(Base);
console.log(o1.a);
console.log(o2.a); // undefined 

console.log(o1.constructor); // Base
console.log(o2.constructor);// Function
console.log(o1 instanceof Base); // true 
console.log(o2 instanceof Base); // false


