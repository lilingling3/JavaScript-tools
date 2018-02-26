// js单线程 主线程
// console.log(1)

// setTimeout(function () {
//   console.log(2) // 异步
// }, 0)

// console.log(3)

setTimeout(function () {
  console.log('定时器开始啦')
}, 3000); // 3秒不正确

// new Promise  同步 放到主线程
new Promise(function (resolve) {
  console.log('马上执行for循环啦');
  for (var i = 0; i < 10000; i++) {
    i == 99 && resolve();
  }
}).then(function () {// 异步 放到执行池
  console.log('执行then函数啦')
});

console.log('代码执行结束'); // 同步 放到主线程
/**
 * js 异步任务执行顺序
 * macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
   micro-task(微任务)：Promise，process.nextTick

 */

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, 3000)
}