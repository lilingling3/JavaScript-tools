let fun1 = function fun2(){

}


let fun3:(x:number,y:number)=>number = (x:number,y:number):number => x+y;

interface fun{
 (x:number,y:number,z?:number):number
}
let fun4 : fun;
fun4= (x:number,y:number,z:number):number => x+y


function add(x,...y){
  console.log(x);
  console.log(y);
}
add(1,2,3)


