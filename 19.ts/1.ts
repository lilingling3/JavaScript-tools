// 基本数据类型
let isDone: boolean = true; // 布尔值
let count: number = 1; // 数字
let nameS: string = 'ling' // 字符串
let sense: string = `我的名字${nameS}` // 模版字符串

let arr: any[] = [1,'3'] // 数组
// <> 类型断言
let arr2: Array<any> =  [1,'3']

// 变量声明 let 
const NUM: number = 1;
const obj = {
  name:'ling'
}
obj.name = 'jzt'

// 解构赋值
let [first,second,...reset] = [1,2,3,4]
let {a:newA, b:newB} = {a:'l', b:'2'}
// type定义类别别名
type C = {a: string, b?: number};
function fun({a,b}:C):void{

}
// 要求传入对象有lable属性 类型string
function bar(obj:{lable:string}){
  console.log(obj.lable)
}

// 定义接口
interface Lable{
  lable:string,
  color?:string, // 属性不一定存在
  readonly width:number // 只读 不可更改
}
function bar2(obj:Lable){

}

class Greet{
  greeting:string
  constructor(message: string){
    this.greeting = message
  }
  greet(){
    console.log(this.greeting)
  }
}
let greet1:Greet
greet1 = new Greet('hee')


let nameStr = 'd';
let len = (<string>nameStr).length;
console.log(len)
