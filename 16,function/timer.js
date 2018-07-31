var timerNum = 60;
var count = 60;
var timerO = setTimeout(timer,0)

function timer(){
  if(count == 0){
    count = timerNum;
    clearTimeout(timerO)
  }else{
    count --;
    setTimeout(timer,1000);
  }
}

// 'get-element-by-id' => 'getElementById'
function toCalm(str){
  var arr = str.split('-');
  return arr.map((item,index)=>{
    if(index == 0){return item;} 
    else {
      return item.charAt(0).toUpperCase() + item.slice(1)
    }
  }).join('')
}
console.log(toCalm('get-element-by-id'))

// 'getElementById' => 'get-element-by-id'

function getLine(str){
  var arr = str.split('');
  return arr.map((item,index)=>{
    if(item.toUpperCase() == item){
      return '-'+item.toLowerCase()
    }else{
      return item
    }
  }).join('')
}
console.log(getLine('getElementById'))

//判断一个字符串中出现次数最多的字符，并统计次数 
var s= 'aaabbbcccaaabbbaaa';
var obj = {};
var maxn = -1;
var letter;
for(var i = 0; i < s.length; i++) {
  if(obj[s[i]]) {
    obj[s[i]]++;
    if(obj[s[i]] > maxn) {
      maxn = obj[s[i]];
      letter = s[i];
    }
  } else {
    obj[s[i]] = 1;
    if(obj[s[i]] > maxn) {
      maxn = obj[s[i]];
      letter = s[i];
    }
  }
}

console.log(letter + ': ' + maxn);

var str = 'aaabbbcccaaabbbaaa';
    var result = maxN(str);
    function maxN(str) {
      
        //定义一个json对象用于保存str的每一项以及出现次数。
        var json = {};
        //遍历str,循环其中的每一个字符，将某个字符的值及出现的个数拿出来作为json的key和value
        for(var i=0;i<str.length;i++){
          // console.log(str.charAt(i))
            //判断json中是否有当前str的值
            if(!json[str.charAt(i)]){
                //如果不存在 就将当前值添加到json中去，并设置1
                json[str.charAt(i)] = 1;
            } else {
                //如果存在的话就让数组中已有的当前值的value值++；
                json[str.charAt(i)] ++;
            }
        }
        //存储出现次数最多的值和次数
        var number = '';
        var num = 0;
        //遍历json  使用打擂算法统计需要的值
        for(var j in json){
            //如果当前项大于下一项
            if (json[j]>num) {
                //就让当前值更改为出现最多次数的值
                num = json[j];
                number = j;
            }
        }
        return {
            number:number,
            num:num
        }
    }
console.log(result);
////判断一个字符串中出现次数最多的字符，并统计次数 使用obj属性唯一性进行判断
var ts = 'aaabbbcccaaabbbaaa';
var res = maxS(ts);
function maxS(str){
  var json = {};
  for(var i=0;i<str.length;i++){
   var temp = str[i];
   if(!json[temp]){
     json[temp] = 1;
   }else{
     json[temp]++
   }
  }
var maxStr = '';
var num = 0;
for(key in json){
  if(json[key]>num){
    num = json[key];
    maxStr = key;
  }
}
return {
  number:maxStr,
  num:num
}
}
console.log(res);

for(let i=1;i<=3;i++){
  setTimeout(function(){
      console.log(i);    
  },0);  
}