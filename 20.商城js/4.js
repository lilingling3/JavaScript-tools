//参数是对象
function query2str(params){
  let res = Object.keys(params).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
  });

  return res.join('&');
};


var obj = {name:'中问',age:true}

console.log(query2str(obj))
// url拼接
// let url = window.CSH_URL + method + '?' + param.map(item => {
//   return item.key + '=' + item.value;
// }).join('&');
// window.location.href = url;
// 参数是数组
function getParam(param){
  let res = param.map(item => {
    return `${item.key}=${item.value}`
  })
  return res.join('&')
}

let arr = [{key:'name',value:'liling'},{key:'age',value:'11'}]

console.log(getParam(arr))



function mill2hms (mills) {
  const htime = 60 * 60 * 1000;
  const mtime = 60 * 1000;
  const stime = 1000;

  const h = Math.floor(mills / htime);
  mills = mills - h * htime;

  const m = Math.floor(mills / mtime);
  mills = mills - m * mtime;

  const s = Math.floor(mills / stime);

  return {
    hour: h, minute: m, sec: s
  };
};


console.log(mill2hms(300000))


function numToFixed (num, digit = 2){
  const _num = parseFloat(num);
  if (_num) {
    return _num.toFixed(digit);
  } else {
    return '0.00';
  }
};

console.log(numToFixed(2.4444))