const iterable = ['mini', 'mani', 'mo'];
 
for (const value of iterable) {
  console.log(value);
}

let obj = {0:'li',1:'12',length:2};
for(let v of Array.from(obj)){
  console.log(v)
}