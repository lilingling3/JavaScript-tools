// 泛型
function one<T>(a:T):T{
  return a
}

one<number>(12)

interface some{
  <T>(a:T[]):T
}


let funSome:some = function(a){
  return a[0]
}

funSome([1,2,'dd'])

interface someI<T>{
  (a:T):T
}
let someFunI:someI<number[]> = function(a){
  return a
}

someFunI([1])