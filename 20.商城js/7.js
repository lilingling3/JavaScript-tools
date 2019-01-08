function getRentMoney(money) {
  let str = '';
  if (money > 99999999) {
    let mumber = money / 100000000;
    let aArr = mumber.toString().split('.');
    if(aArr.length > 1) {
      str = aArr[0] + "." + aArr[1].substr(0, 2);
     }else{
      str = aArr[0]
     }
    return `${str}亿`;
  } else if (money > 10000000 && money <= 99999999) {
    let mumber = money / 10000000;
    let aArr = mumber.toString().split('.');
    if(aArr.length > 1) {
      str = aArr[0] + "." + aArr[1].substr(0, 2);
     }else{
      str = aArr[0]
     }
    return `${str}千万`;
  } else if (money >= 10000 && money <= 9999999) {
    let mumber = money / 10000;
    let aArr = mumber.toString().split('.');
    if(aArr.length > 1) {
      str = aArr[0] + "." + aArr[1].substr(0, 2);
     }else{
      str = aArr[0]
     }
    return `${str}万`;
  } else {
    str = money;
    return `${str}元`;
  }
}
// 
console.log(getRentMoney(10000777));
