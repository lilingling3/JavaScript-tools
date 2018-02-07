// 第一种方式
var obj1 = {};
obj1.name = 'ling';
console.log(obj1);

// 第二种方式
var obj2 = new Object();
obj2.name = 'ling2'
console.log(obj2);

// 第三种方式 同第二种方式
function Person() {
  this.name = 'ling3';
};
var obj3 = new Person();
console.log(obj3);

console.log(obj1 instanceof Object) // true 
console.log(obj2 instanceof Object) // true 
console.log(obj3 instanceof Object) // true

console.log(obj1.constructor); // [Function: Object]
console.log(obj2.constructor); // [Function: Object]
console.log(obj3.constructor); // [Function: Person]

console.log(obj3.__proto__) // {}
console.log(Person.prototype) // {}

/**
 * 创建对象的过程
 * var o1 = new Object();
   o1.__proto__ = Base.prototype;
   Base.call(o1);

  __proto__（隐式原形） 和 prototype （显示原形）的区别
  每一个函数创建之后，就拥有prototype属性，这个属性指向函数的原型对象
  
  隐式原形 指向 创建这个对象的函数（contructor）的prototype
  显示原形 用来 实现基于原形的继承与属性的共享
 * 
 */

/**
 * 前三种创建过程
 *  var o1 = new Object();  
    o1.__proto__ = Person.prototype; // 必须是function定义
    Person.call(o1);
 */

/**
 * 第四种方式创建过程  
   基于原有的对象 创建新对象

 Object.create =  function (o) { //function 定义跟object定义
   var F = function () {};
   F.prototype = o;
   return new F();
 };
 
 通过这个方式我们不能通过外部访问它的构造函数

 */

// 第四种方式
var obj4 = Object.create(Person);
console.log(obj4.__proto__); // [Function: Person]
console.log(obj4.constructor) // [Function: Function]
console.log(Person.prototype) // {}

var f = new Person();
console.log(f.__proto__ === Person.prototype); // true
console.log(Person.prototype); //{}
console.log(f.__proto__); // {}
console.log(Person.prototype.__proto__ == Object.prototype)
console.log(f.constructor) // [Function: Person]


console.log(typeof null)  // object
console.log(null instanceof Object ) // false


