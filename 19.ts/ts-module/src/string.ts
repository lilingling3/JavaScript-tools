function stringT(first,second,third){
  console.log(first)
  console.log(third)
  console.log(second)
}

let nameT = 'll' 
let age = 12
// 模版字符串调用函数 自动拆分字符串
stringT`in ${nameT} ,ddd${age}`


function arr(a,b,c){
  console.log(a)
  console.log(a)
  console.log(c)
}
var arr1 = [1,2,3,4]
var arr2 = [1,2]

function* decodeee(){
  yield 'generaor函数'
}
let value = decodeee().next().value;
console.log(value)


function stock(){
  return {
    code:'IBm',
    price:{
      price1:11,
      price2:22
    }
  }
}

let {code,price:{price1,price2}} = stock()



class Person{
  name:string
  constructor(name:string){
    this.name = name
  }
  eat(){
    console.log(this.name)
  }
}
// 等同于上面
class Person2{
  constructor(public name:string){
  }
  eat(){
    console.log(this.name)
  }
}

// 继承

class Ele extends Person2{
  code:string;
  constructor(name:string,code:string){
    super(name)
    this.code = code
  }
 
  work(){
    super.eat()
    this.doWork()
  }

  private doWork(){
    console.log('doworkd')
  }
}

let ele1 =new Ele('nlll','11')
ele1.work()

let types : Array<Person> = []; //指定范型

types[0] = new Person('iii')
