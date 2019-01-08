function getRentMoney(money) {
  let preNum = ''; // 整数位
  let suffixNum = ''; // 小数位
  let unit = ''; // 单位

  if (money >= 100000000) {
    // 大于 1亿 显示亿
    let mumber = money / 100000000;
    let aArr = mumber.toString().split('.');
    preNum = aArr[0]; // 整数位
    if (aArr.length > 1) {
      suffixNum = aArr[1].substr(0, 2); // 截取小数位
    }
    unit = '亿'; // 单位
  } else if (money > 10000000 && money < 100000000) {
    // 大于1千万 到 1亿 显示 千万
    let mumber = money / 10000000;
    let aArr = mumber.toString().split('.');
    preNum = aArr[0]; // 整数位
    if (aArr.length > 1) {
      suffixNum = aArr[1].substr(0, 2); // 截取小数位
    }
    unit = '千万'; // 单位
  } else if (money >= 10000 && money < 10000000) {
    // 大于等于1万 小于千万 显示万
    let mumber = money / 10000;
    let aArr = mumber.toString().split('.');
    preNum = aArr[0]; // 整数位
    if (aArr.length > 1) {
      suffixNum = aArr[1].substr(0, 2); // 截取小数位
    }
    unit = '万'; // 单位
  } else {
    // 原值也要处理，因为可能是12.456677，需要处理小数位
    let mumber = money;
    let aArr = mumber.toString().split('.');
    preNum = aArr[0]; // 整数位
    if (aArr.length > 1) {
      suffixNum = aArr[1].substr(0, 2); // 截取小数位
    }
    unit = '元'; // 单位
  }

  if (suffixNum == '' || suffixNum == '00') {
    // 小数位都是0，只返回整数
    return `${preNum}${unit}`;
  } else if (suffixNum.substr(1, 2) == '0') {
    // 小数位最后一个是0，只返回第一个小数位
    let temp = suffixNum.substr(0, 1);
    return `${preNum}.${temp}${unit}`;
  } else {
    return `${preNum}.${suffixNum}${unit}`;
  }
}
console.log(getRentMoney(25000));