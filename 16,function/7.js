// var fn=function (){
//   //通过var 创建的能过在函数作用域访问
//   console.log(fn);
// };
// fn()

var o={
  fn:function (){
    // fn undefined 通过对象创建的，没有函数作用域
    console.log(fn);
  }
};
o.fn();