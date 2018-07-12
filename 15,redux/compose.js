var f1 = function(a) {
	return a * 10;
}

var f2 = function(a) {
	return a + 1;
}

function compose1(f1, f2) {
	return function(x) {
		return f1(f2(x))
	}
}

var number1 = compose1(f1, f2)(4) 
console.log(number1) // 50

let compose2 = (...funs) => (result) => {
	for (var i = funs.length - 1; i > -1; i--) {
      result = funs[i].call(this, result);
    }
    
	return result;
}

var number2 = compose2(Math.round, parseFloat)('5.8');
console.log(number2)
// reduce 方法解析
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)


