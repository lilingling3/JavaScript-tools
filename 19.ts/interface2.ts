interface Db2 {
  host: string
  port: number
  // 其他属性
  [propName: string]: string | number
}

let db2: Db2 = {
  host: '99',
  port: 1,
  age: 22
}


// 定义函数类型

type Db3 = string
interface InitFun {
  (opt:string):string
}

let testF:InitFun = (opt:string)=> {
  return 'dd'
}

let testF2:(opt:string)=>string = (opt:string)=>{
  return 'd'
}