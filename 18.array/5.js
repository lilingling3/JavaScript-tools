//console.log(1&&2); // 2
//console.log(1 || 2) // 1

function C1(name){
    if(name) this.name = name;
}
function C2(name){
  this.name = name
}
function C3(name){
  this.name = name || 'json'
}

C1.prototype.name = 1;
C2.prototype.name = 1;
C3.prototype.name = 1;

console.log(new C1()) // {}
console.log(new C1().name)   // 1

console.log(new C2())  // {name:undefined}
console.log(new C2().name)// undefined

console.log(new C3()) // {name:json}
console.log(new C3().name)// json

  
 
var test = (function(i){
  return function(){
    console.log(i*2)
  }
}(2))
test(5)


