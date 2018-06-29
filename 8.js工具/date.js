var date = new Date();//中国标准时间
var year = date.getFullYear();//获取完整的年份(4位)
var month = date.getMonth();//获取当前月份(0-11,0代表1月)
var nowDate = date.getDate();//获取当前日(1-31)
var day = date.getDay();//获取当前星期X(0-6,0代表星期天)


/**
 * 格式化日期
 * 
 */
//格式化日期：yyyy-MM-dd
function formatDate (date) {
  var myyear = date.getFullYear();
  var mymonth = date.getMonth() + 1;
  var myweekday = date.getDate();

  if (mymonth < 10) {
    mymonth = "0" + mymonth;
  }
  if (myweekday < 10) {
    myweekday = "0" + myweekday;
  }
  return (myyear + "-" + mymonth + "-" + myweekday);//想要什么格式都可以随便自己拼
}

var date = new Date();
//date
//Mon Jun 25 2018 15:32:38 GMT+0800 (中国标准时间)
var date1 = formatDate(date);
//"2018-06-25"
console.log(date1)

//获取当前日期 时间 xx 年 xx 月 xx 日 xx 时 xx 分
function todayTime () {
  var date = new Date();
  var curYear = date.getFullYear();
  var curMonth = date.getMonth() + 1;
  var curDate = date.getDate();
  if (curMonth < 10) {
    curMonth = '0' + curMonth;
  }
  if (curDate < 10) {
    curDate = '0' + curDate;
  }
  var curHours = date.getHours();
  var curMinutes = date.getMinutes();
  var curtime = curYear + ' 年 ' + curMonth + ' 月 ' + curDate + ' 日' + curHours + '时 ' + curMinutes + '分 ';
  return curtime;
}

var date2 = todayTime();
console.log(date2)

//获取当前日期 英文
function todayTimeEn () {
  var dt = new Date();
  var m = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  mn = dt.getMonth();
  dn = dt.getDate();
  if (dn < 10) {
    dn = '0' + dn;
  }
  var curtime = m[mn] + " " + dn + ", " + dt.getFullYear();
  return curtime;
}

var date3 = todayTimeEn();
console.log(date3)