var arr = [1,2,5,4,5,6,7,8,5];
for(var i = 0;i<arr.length;i++){
    if(arr[i]===5){
        arr.splice(i,1);
        // i--;
    }
}
console.log(arr); 