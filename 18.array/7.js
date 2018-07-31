console.log(1)
setTimeout(function(){
  console.log(2)
})
console.log(3)
const p = new Promise((resolve, reject) => {
  console.log(4)
  resolve()
})

p.then(()=>{
  console.log(5)
})
console.log(6)
