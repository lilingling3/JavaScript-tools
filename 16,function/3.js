//函数定义
function add(x,y){
    return x + y;
}
//函数调用
add(3,4);//5

//函数表达式定义 柯里化
// 实际是利用闭包
var add = function(x){
  return function(y){
      return x + y;
  }
};
//函数调用
add(3)(4);

Function.prototype.bind = function(){
  var fn = this;
  var args = Array.prototye.slice.call(arguments);
  var context = args.shift();

  return function(){
      return fn.apply(context,
          args.concat(Array.prototype.slice.call(arguments)));
  };
};

function plus(num) {
  var adder = function () {
      var _args = [];
      var _adder = function _adder() {
          [].push.apply(_args, [].slice.call(arguments));
          return _adder;
      };

      _adder.toString = function () {
          return _args.reduce(function (a, b) {
              return a + b;
          });
      }

      return _adder;
  }
  return adder()(num);
}

var length = 10;
function fn() {
    console.log(this.length)
};
var obj = {
    length: 5, 
    method: function (fn) {
        fn(); // 10
        arguments[0](); //2
        fn.call(obj, 12); // 5
    }
};
obj.method(fn, 1);
/**
 * 默认绑定就是什么都匹配不到的情况下，非严格模式this绑定到全局对象window或者global,严格模式绑定到undefined;隐式绑定就是函数作为对象的属性，通过对象属性的方式调用，这个时候this绑定到对象;显示绑定就是通过apply和call调用的方式;new绑定就是通过new操作符时将this绑定到当前新创建的对象中，它们的匹配有限是是从小到大的。
 */

function Foo() {
  // 全局
  getName = function () { 
      console.log('1');
  };
  return this;
}
Foo.getName = function () {
  console.log('2');
};
Foo.prototype.getName = function () { 
  console.log('3');
};
var getName = function () { 
  console.log('4');
};
// 函数声明提前
function getName() { 
  console.log(5);
}

Foo.getName();  // 2
getName(); // 4   
Foo().getName(); // 1
getName(); //1 
new Foo.getName(); // 2
new Foo().getName(); ///2  
new new Foo().getName(); //3


var obj = {
  test:'ling'
}
console.log('%c ddd','color:red',obj)

// 手写闭包
function fun (){
  var a = 0;
  function _fun(){
    console.log(a)
  }
  return _fun
}
// 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前的词法作用域之外的执行的
var bar = fun();
bar();

