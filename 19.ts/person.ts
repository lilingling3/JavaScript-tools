enum Choose{
  wife,
  mother
}
function question(choose:Choose):void{
  console.log('选择哪一个')
  console.log(choose)
}

// question(Choose.wife)
type Address = string;
type Tel = number;

class Person{
  name: string; // 名字
  age: number; // 年龄
  labels: Array<string>; // 标签组
  wives: string[]; // 妻子们
  contact: [Address, Tel]; // 元组 联系[联系地址，联系电话]
  other: any; // 备注
  saveMonth: boolean = true; // 是否救落水的妈妈
  constructor(){}
  answer() : Choose{
      if (this.saveMonth === false){
         return Choose.wife;
      }
      return Choose.mother;
  }
  hello() : void{
      console.log('hello~ i\'m ' + this.name);
      // return undefined;
      // return null;
  }
  empty(){}
  down() : never {
      while (true){}
      // throw new Error('error')
  }
}
let zhangsan = new Person();
​
zhangsan.name = "张三";
zhangsan.age = 28;
zhangsan.labels = ["颜值逆天", "年轻多金"];
zhangsan.wives = ["一号","二号","三号"];
zhangsan.contact = ["北京xxxxxxx别墅", 2];
zhangsan.saveMonth = false;
zhangsan.other = '不好不坏的人';
​// <string>强制转化类型 这样方便提示string 类型方法
let leng = (<string>zhangsan.other).length;
​
console.log(leng);
question(zhangsan.answer());
​
zhangsan.hello();
​
console.log(zhangsan.empty());


// 默认对象
function saySomeThing1({ x , y } = {x : 0, y: 0}) {
  console.log(x, y)
}
​// 默认属性
function saySomeThing2({ x = 0 , y = 0 }) {
  console.log(x, y)
}
​
function saySomeThing3({ x = 0 , y = 0 } = {x:2,y : 2}) {
  console.log(x, y)
}
​
saySomeThing1()
saySomeThing1({ x: 3 , y: 3 })
​
saySomeThing2({})
saySomeThing2({ x: 3 , y: 3 })
​
saySomeThing3()
/**
 * 
 * function saySomeThing3({ x = 0 , y = 0 } = {x:2,y : 2}) {
  console.log(x, y)
}
 */
saySomeThing3({})