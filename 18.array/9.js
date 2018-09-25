var obj = [
  {id:1,parent:null},
  {id:2,parent:1},
  {id:3,parent:2}
]

// var obj2 = {
//   obj:{
//       id: 1,
//       parent: null,
//       child: {
//           id: 2,
//           parent: 1,
//           child: {
//               id: 3,
//               parent: 2
//           }
//       }
//   }
// }

function mul(arr, n) {
  if (n == (arr.length - 1)) { // 3
      return arr[n]
  }
  arr[n].child = mul(arr, n + 1);
  return arr[n];

}
var obj2= mul(obj, 0);

console.log(obj2)

// 函数提升
function fn(a) {
  console.log(a); 
  var a = 2;
  // function a() {}
  // console.log(a); 
}

fn(1);