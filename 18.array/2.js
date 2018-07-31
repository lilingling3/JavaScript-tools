class Student{
  constructor(name,age,subject){
    this.name = name;
    this.age = age;
    this.subject = subject;
  }
  study(){
    console.log(`学习${this.subject}`)
  }
}

var student1 = new Student('hello',24,'web');
student1.study();

console.log(student1.__proto__.study == Student.prototype.study);
console.log(student1.hasOwnProperty('study'))


var _obj = {name:'lingling',age:13}
for(var keyname in _obj){
  console.log(keyname)
}