var s="This is C programming text" 
var t="This is a text for C programming"
function test(s,t){
  var commonArray = [];
  var s = s.split(' ');
  var t = t.split(' ');
  s.forEach(itemS => {
    t.forEach(itemT => {
      if(itemS == itemT){
        commonArray.push(itemS)
      }
    });
  });
  return commonArray;
}

function getString(s,t){
  var lengh = 0;
  var stringTs = ''
  var testArray = test(s,t);
  testArray.forEach((item,index)=>{
    if( String(item).length > lengh){
      lengh = item.lengh;
      stringTs = item
    }
  })
   return stringTs;
}
var strinR = getString(s,t);
console.log(strinR)
