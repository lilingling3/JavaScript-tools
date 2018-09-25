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

Promise.resolve().then(()=>console.log(7))
Promise.resolve(console.log(6))
console.log(8)

// function test() {  
//   while(true){
//     console.log('whil')
//   }
// }

// test()

var arrT = [1,2]
var arr2 = arrT.slice()
arr2.splice(1,1)
console.log(arr2)
console.log(arrT)

var color = 'red'
function colorChange(){
  color = 'yellow'
}
colorChange()
console.log(color)

