// promise
function sleep(ms){
  var temple=new Promise(
  (resolve)=>{
  console.log(111);setTimeout(resolve,ms)
  });
  return temple
}
sleep(500).then(function(){
   console.log(222)
})
// async await
function sleep(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}
async function test(){
  var temple=await sleep(1000);
  console.log(1111)
  return temple
}
test()
// generate
function* sleepG(ms){
  yield new Promise(function(resolve,reject){
            console.log(111);
            setTimeout(resolve,ms);
       })  
}
sleepG(500).next().value.then(function(){console.log(2222)})


