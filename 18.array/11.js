// es6 代理
var person = {
  fisrsName: '张',
  lastName: '小白'
};
var proxyedPerson = new Proxy(person, {
  get: function (target, key) {
    if(key === 'fullName'){
      return [target.fisrsName, target.lastName].join(' ');
    }
    return target[key];
  },
  set: function (target, key, value) {
    if(key === 'fullName'){
      var fullNameInfo = value.split(' ');
      target.fisrsName = fullNameInfo[0];
      target.lastName = fullNameInfo[1];
    } else {
      target[key] = value;
    }
  }
});

console.log('姓:%s, 名:%s, 全名: %s', proxyedPerson.fisrsName, proxyedPerson.lastName, proxyedPerson.fullName);// 姓:张, 名:小白, 全名: 张 小白
proxyedPerson.fullName = '李 小露';
console.log('姓:%s, 名:%s, 全名: %s', proxyedPerson.fisrsName, proxyedPerson.lastName, proxyedPerson.fullName);// 姓:李, 名:小露, 全名: 李 小露
console.log('**********');



var objTest = {name:'lingling'}
console.log('%c 对象%o',objTest,'color:red')
