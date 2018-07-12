var obj = {x : 1};
 function foo(o) {
     o = 100;
 }
 foo(obj);
 console.log(obj.x);

 new Promise((resolve,reject)=>{
   setTimeout(() => {
     resolve('success')
   }, 200);
 })
 .then(x => console.log(x))
 .catch(err => console.error(err))