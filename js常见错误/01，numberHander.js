var s = '2,400.4';
// 千位分隔符 使用jsonPase
var res = parseFloat(s);
console.log(res) // 2 结果是2 不是2400  parseFloat 第二参数按照二进制进行解析
// 解决方式
function commafyback(num) {
  var x = num.split(',');
  return parseFloat(x.join(""));
};
