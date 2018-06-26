/**
 * 简单的深拷贝实现，个人经常这么使用
 * 这里obj中不能包含特殊类型值：undefined,NaN,function类型值
 * @param {object} obj
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * log 函数的二次封装，这里只是为了演示
 * @param {any} content
 */
function log(content) {
  console.log(`[Yuga log]: ${JSON.stringify(content)}`);
}

let foo3 = {a:1}
let bar3 = deepClone(foo3); // 伟大的用处
foo3.a ++;
console.log(foo3.a) // 2
console.log(bar3.a) // 1

log(foo3)