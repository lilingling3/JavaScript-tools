function getThreeDaysBeforeDate() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth();
  let firstDay = new Date(y, m, 1);
  let firstTime = timestamp(firstDay);
  let afterDay = getAfterDate(firstDay, 3);
  let afterTime = timestamp(new Date(afterDay));
  console.log('first' + firstTime);
  console.log('after' + afterTime);
}
getThreeDaysBeforeDate();

function timestamp(date) {
  Y = date.getFullYear() + '/';
  M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '/';
  D = date.getDate() + ' ';
  h = date.getHours() + ':';
  m = date.getMinutes() + ':';
  s = date.getSeconds();
  return Y + M + D + h + m + s;
}

function getAfterDate(date, index) {
  let dayAfter =
    date.getTime() + 24 * 60 * 60 * 2 * 1000 + 24 * 60 * 60 * 1 * 1000;
  return dayAfter;
}

Date.prototype.format = function (fmt) { //author: meizz
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
