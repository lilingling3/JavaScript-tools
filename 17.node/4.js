//实现继承
function Animal(){
  this.species = 'animal';
}
      
function Dog(name,color){
  this.name = name;
  this.color = color;
}
// 方法一 call 继承属性
/*
function Dog(name,color){
  Animal.call(this,arguments)
  this.name = name;
  this.color = color;
}
var lucky = new Dog('lucky','brown');
console.log(lucky.species); // animal'
*/
// 方法二 原型
/*
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
var lucky = new Dog('lucky','Brown');
console.log(lucky.species);
*/

/*
function Animal(){}
Animal.prototype.species = 'animal';

function Dog(name,color){
    this.name = name;
    this.color = color;
};

Dog.prototype = Animal.prototype;
Dog.prototype.constructor = Dog;
var lucky = new Dog('lucky','brown');
console.log(lucky.species);

这样做的好处是效率高，速度快，省内存，但是Dog.prototype和Animal.prototype现在指向了同一个对象，修改Dog.prototype会直接修改Animal.prototype
*/
// 空对象作为中介
var F = function(){};
F.prototype = Animal.prototype;
Dog.prototype = new F();
Dog.prototype.constructor = Dog;

console.log(Animal.prototype.constructor); //Animal
var lucky = new Dog('lucky','brown');
console.log(lucky.species); // animal

