function add (){
  var args = [].slice.call(arguments);
  function addr (){
    var _addr = function(){
      [].push.apply(args,[].slice.call(arguments));
      return _addr
    }

    _addr.toString = function(){
      return args.reduce((total,currentData)=>total + currentData)
    }
    return _addr;
  }
  return addr(null,[].slice.call(arguments))
}

console.log(add(1, 2, 3, 4, 5));  // 15
console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15

function argCheck (obj,arg) {
  var arg=Array.prototype.slice.call(arguments,1);
  console.log(arg)
}

argCheck(this,22,3)