//1
let checkType=function(str, type) {
  switch (type) {
      case 'email':
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'mobile':
          return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      case 'tel':
          return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'number':
          return /^[0-9]$/.test(str);
      case 'english':
          return /^[a-zA-Z]+$/.test(str);
      case 'text':
          return /^\w+$/.test(str);
      case 'chinese':
          return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower':
          return /^[a-z]+$/.test(str);
      case 'upper':
          return /^[A-Z]+$/.test(str);
      default:
          return true;
  }
}
//2
let checkType=(function(){
  let rules={
      email(str){
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      },
      mobile(str){
          return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      },
      tel(str){
          return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      },
      number(str){
          return /^[0-9]$/.test(str);
      },
      english(str){
          return /^[a-zA-Z]+$/.test(str);
      },
      text(str){
          return /^\w+$/.test(str);
      },
      chinese(str){
          return /^[\u4E00-\u9FA5]+$/.test(str);
      },
      lower(str){
          return /^[a-z]+$/.test(str);
      },
      upper(str){
          return /^[A-Z]+$/.test(str);
      }
  };
  //暴露接口
  return {
      //校验
      check(str, type){
          return rules[type]?rules[type](str):false;
      },
      //添加规则
      addRule(type,fn){
          rules[type]=fn;
      }
  }
})();

//调用方式
//使用mobile校验规则
console.log(checkType.check('188170239','mobile'));
//添加金额校验规则
checkType.addRule('money',function (str) {
  return /^[0-9]+(.[0-9]{2})?$/.test(str)
});
//使用金额校验规则
console.log(checkType.check('18.36','money'));

// 3
let checkType=(function(){
  let rules={
      email(str){
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      },
      mobile(str){
          return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      },
      tel(str){
          return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      },
      number(str){
          return /^[0-9]$/.test(str);
      },
      english(str){
          return /^[a-zA-Z]+$/.test(str);
      },
      text(str){
          return /^\w+$/.test(str);
      },
      chinese(str){
          return /^[\u4E00-\u9FA5]+$/.test(str);
      },
      lower(str){
          return /^[a-z]+$/.test(str);
      },
      upper(str){
          return /^[A-Z]+$/.test(str);
      }
  };
  //暴露接口
  return function (str,type){
      //如果type是函数，就扩展rules，否则就是验证数据
      if(type.constructor===Function){
          rules[str]=type;
      }
      else{
          return rules[type]?rules[type](str):false;
      }
  }
})();

console.log(checkType('188170239','mobile'));

checkType('money',function (str) {
  return /^[0-9]+(.[0-9]{2})?$/.test(str)
});
//使用金额校验规则
console.log(checkType('18.36','money'));

