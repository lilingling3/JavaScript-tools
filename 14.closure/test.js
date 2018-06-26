// for(var i=0;i<5;i++){
//   setTimeout(()=>{
//     console.log(i)
//   },i*1000)
// }

console.log('另外一个');

for(var i=0;i<5;i++){
  (function(i){
    setTimeout(() => {
      console.log(i)
    }, i*1000);
  })(i)
}