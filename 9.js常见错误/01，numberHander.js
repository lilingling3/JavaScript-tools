var s = '2,400.4';
// 千位分隔符 使用jsonPase
var res = parseFloat(s);
console.log(res) // 2 结果是2 不是2400  parseFloat 第二参数按照二进制进行解析
// 解决方式
function commafyback(num) {
  var x = num.split(',');
  return parseFloat(x.join(""));
};

// 比较三个数据大小 带有千位符
var minamountMonthly = commafyback(result[minIndex].amountMonthly);
var minamountFirstPay = commafyback(result[minIndex].amountFirstPay);
state.minamountFirstPayPlanName = result[minIndex].planName;
state.minamountMonthlyPlanName = result[minIndex].planName;

result.forEach((item, index) => {
  if (index == 0) return;
  // 最小首付
  if (commafyback(item.amountFirstPay) < minamountFirstPay) {
    minamountFirstPay = commafyback(item.amountFirstPay);
    state.minamountFirstPayPlanName = item.planName;
  } else if (commafyback(item.amountFirstPay) == minamountFirstPay) {// 判断有相等的情况
    state.minamountFirstPayPlanName += ',' + item.planName;
  }
  // 最小月供
  if (commafyback(item.amountMonthly) < minamountMonthly) {
    minamountMonthly = commafyback(item.amountMonthly);
    state.minamountMonthlyPlanName = item.planName;
  } else if (commafyback(item.amountMonthly) == minamountMonthly) {
    state.minamountMonthlyPlanName += ',' + item.planName;
  }
});

