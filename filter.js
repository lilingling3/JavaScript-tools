let spread = [12, 5, 8, 130, 44];
let spreaded = spread.filter(n=>n>10);
console.log(spreaded); // 返回新数组

//键值进行查询
let users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'ared',   'age': 24, 'active': false },
  { 'user': 'ered',   'age': 80, 'active': false },
  { 'abc': 'ered',   'age': 80, 'active': false }
];
let filtered = users.filter(n =>n.age==80);
// console.log(filtered);

// 数组去重
let spread1 = [12, 5, 8, 8, 130, 44,130];
let filtered1 = spread1.filter((item,idx,arr)=>{
  // console.log(arr.indexOf(item)) // arr.indexOf()默认找的是数组中第一个
  return arr.indexOf(item) == idx;
});
// console.log(filtered1);

// 删除空字符串
let spread2 = ['A', '', 'B', null, undefined, 'C', '  '];
let filter2 = spread2.filter((item,idx,arr)=>{
  return item&&item.trim()
});
console.log(filter2);

let arr = [{
  gender: 'man',
  name: 'john'
}, {
  gender: 'woman',
  name: 'mark'
}, {
  gender: 'man',
  name: 'jerry'
}];
var newArr = arr.filter(n=>n.gender == 'man')
             .map(item=>item.name+44); //map 进行计算包装
console.log(newArr)