// var array=[-5,8,9,-6,7,28] 按照数组与数字5之间绝对距离进行排序
var array=[-5,8,9,-6,7,28];
var newA = array.map((item,index)=>Math.abs(item - 5)).sort((a,b)=>a-b)

console.log(newA)


function A(){
  
}
function B(a){
  this.a = a
}
function C(a){
if(a) {
  this.a = a
}
}

A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A()) // {}
console.log(new B()) // { a: undefined }
console.log(new C(2)) // { a: 2 }



