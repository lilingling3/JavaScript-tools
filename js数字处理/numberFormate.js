/*
  * 参数说明：
  * number：要格式化的数字
  * decimals：保留几位小数
  * dec_point：小数点符号
  * thousands_sep：千分位符号
  * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
  * */
function number_format(number, decimals, dec_point, thousands_sep, roundtag) {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  roundtag = roundtag || "ceil"; //"ceil","floor","round"
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {

      var k = Math.pow(10, prec);
      console.log();

      return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
    };
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
var numFormate = number_format(1233, 2, '.', ',')
console.log(numFormate); // 1,233.00
console.log(typeof numFormate); // string

/**
 * 小写转大写
 */
function arrToList(arr) {
  const idxArray = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var number = '';
  for (let i = 0; i < arr.length; i++) {
    number += idxArray[i]
  }
  // console.log(number);
  return number;
};
console.log(arrToList([1, 2])) // 一二

/**
 * 
 * 数字转中文
 */
const numberChinese1 = (number) => {
  var units = '个十百千万@#%亿^&~', chars = '零一二三四五六七八九';
  var a = (number + '').split(''), s = []
  if (a.length > 12) {
    throw new Error('too big');
  } else {
    for (var i = 0, j = a.length - 1; i <= j; i++) {
      if (j == 1 || j == 5 || j == 9) {//两位数 处理特殊的 1*
        if (i == 0) {
          if (a[i] != '1') s.push(chars.charAt(a[i]));
        } else {
          s.push(chars.charAt(a[i]));
        }
      } else {
        s.push(chars.charAt(a[i]));
      }
      if (i != j) {
        s.push(units.charAt(j - i));
      }
    }
  }
  //return s;
  return s.join('').replace(/零([十百千万亿@#%^&~])/g, function (m, d, b) {//优先处理 零百 零千 等
    b = units.indexOf(d);
    if (b != -1) {
      if (d == '亿') return d;
      if (d == '万') return d;
      if (a[j - b] == '0') return '零'
    }
    return '';
  }).replace(/零+/g, '零').replace(/零([万亿])/g, function (m, b) {// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
    return b;
  }).replace(/亿[万千百]/g, '亿').replace(/[零]$/, '').replace(/[@#%^&~]/g, function (m) {
    return { '@': '十', '#': '百', '%': '千', '^': '十', '&': '百', '~': '千' }[m];
  }).replace(/([亿万])([一-九])/g, function (m, d, b, c) {
    c = units.indexOf(d);
    if (c != -1) {
      if (a[j - c] == '0') return d + '零' + b
    }
    return m;
  });
}

console.log(numberChinese1(123)) // 一百二十三

function numberChinese2(number) {
  const strNumber = number.toString();
  const len = strNumber.length;
  let numberCh = "";
  for (let i = 0; i < len; i++) {
    let currentNum = strNumber.substr(i, 1);
    switch (currentNum) {
      case '0':
        numberCh += '零';
        break;
      case '1':
        numberCh += '一';
        break;
      case '2':
        numberCh += '二';
        break;
      case '3':
        numberCh += '三';
        break;
      case '4':
        numberCh += '四';
        break;
      case '5':
        numberCh += '五';
        break;
      case '6':
        numberCh += '六';
        break;
      case '7':
        numberCh += '七';
        break;
      case '8':
        numberCh += '八';
        break;
      case '9':
        numberCh += '九';
        break;
      default:
        numberCh += '*';
    }
  }
  return numberCh;
}

console.log(numberChinese2(345)) // 三四五

// toLocaleString 技巧
console.log((123456789).toLocaleString('zh-hans-CN-u-nu-hanidec', { useGrouping: true })) // 123,456,789
console.log((123456789).toLocaleString('zh-hans-CN-u-nu-hanidec', { useGrouping: false })) // 123456789
var numberTOChiness = (123456789).toLocaleString('zh-Hans-CN-u-nu-hanidec', { useGrouping: false });
console.log(numberTOChiness) // 浏览器 打开 输出 一二三四五六七八九
var numberTOFix = [1,2,3,4].map(i=>i.toLocaleString('zh-Hans-CN-u-nu-hanidec',{useGrouping:false}));
console.log(numberTOFix);
console.log([1, 2].toLocaleString()); // 1,2

function formatMoney(s, type) {  
  if (/[^0-9\.]/.test(s))  
      return "0";  
  if (s == null || s == "")  
      return "0";  
  s = s.toString().replace(/^(\d*)$/, "$1.");  
  s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");  
  s = s.replace(".", ",");  
  var re = /(\d)(\d{3},)/;  
  while (re.test(s))  
      s = s.replace(re, "$1,$2");  
  s = s.replace(/,(\d\d)$/, ".$1");  
  if (type == 0) {// 不带小数位(默认是有小数位)
      var a = s.split(".");  
      if (a[1] == "00") {  
          s = a[0];  
      }  
  }  
  return s;  
}
console.log('处理金额')
console.log(formatMoney('13222222',3)); // string  13,222,222.00

function format_number(n){  
  var b=parseInt(n).toString();  
  var len=b.length;  
  if(len<=3){return b;}  
  var r=len%3;  
  return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");  
}  

console.log(format_number('4524324234')); // 4,524,324,234

/**
 *数字 去掉千位符合，用于数字比较的时候
 * 
 */
function commafyback(num) {
  var x = num.split(',');
  return parseFloat(x.join(""));
};

