// function add(a) {
//   return function(b) {
//       return a + b;
//   }
// }

// console.log(add(1)(2));


function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function () {
      var _adder = function() {
          [].push.apply(_args, [].slice.call(arguments));
          return _adder;
      };

      // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      _adder.toString = function () {
          return _args.reduce(function (a, b) {
              return a + b;
          });
      }

      return _adder;
  }
  /**
   *  apply显示更改this指向 第一个参数null ，this指向window 第二个参数数组
   *  call 第一个参数 this指向，null this指向window,后面可以传递多个参数
   *  bind 更改this,返回是一个函数
   */
  
  return adder.apply(null, [].slice.call(arguments));
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5));  // 15
console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15

Function.prototype.bind=function(obj,arg){
  var arg=Array.prototype.slice.call(arguments,1);
  
  var context=this;
  var bound=function(newArg){
    arg=arg.concat(Array.prototype.slice.call(newArg));
    return context.apply(obj,arg);
  }
  var F=function(){}
  //这里需要一个寄生组合继承
  F.prototype=context.prototype;
  bound.prototype=new F();
  return bound;
}

Function.prototype.bind=function(obj,arg){
  var arg=Array.prototype.slice.call(arguments,1);
  var context=this;
  return function(newArg){
    arg=arg.concat(Array.prototype.slice.call(newArg));
    return context.apply(obj,arg);
  }
}

function say(){
  //something
  setTimeout(say,200);
}
setTimeout(say,200)

