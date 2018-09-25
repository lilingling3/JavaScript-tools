 // 解决更改对象属性的值，覆盖之前的值
 function handleInput(name, data) {
    const params = {}
    params[name] = data
    this.setInvoiceBaseInfo(params)
}
// 数组筛选id
  // let tepmArr = [];
  //         cities.forEach(element => {
  //          if(element.id == 1 ||  element.id == 880){
  //           tepmArr.push(element)
  //          }
  //        });
          
  // this.cityList = cities.filter((item) => item.id == 1 || item.id == 880);
/**
 * 
 * Math.round 四舍五入 取整
 * 除2再乘是为了忽视小数，取最近偶数
 */
  function calcShowMoney(number){
    return Math.round(number/2)*2*500;
  }
// toFixed(2)保留两位小数
function getRent(item){
  return (item.rent_money/10000).toFixed(2);
}
var a=1234

a.toString()
// "1234"

a.toLocaleString()
// "1,234"