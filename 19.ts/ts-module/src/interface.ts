interface Person33{
  name:string,
  age:number
}

class Person3{
  constructor(public config:Person33){

  }
}

let p1 = new Person3({
  name:'00',
  age:12
})

// 必须实现
class Person4 implements Person33{
  name:string;
  age:number
}