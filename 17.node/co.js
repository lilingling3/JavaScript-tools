var fs = require("fs");

co(function*(){
    var data1 = yield readFile('path1');
    console.log(data1);
    var data2 = yield readFile('path2');
    console.log(data2);
});
// thunk化 或者 promise化
// 多参数函数，将其替换成单参数只接受回调函数作为唯一参数的版本 thunkify
function readFile( path ){
    return function(callback){
       fs.readFile( path , callback);
    }
}
// readFile promise化
function read(path) {
  return new Promise(function (resolve, reject) {
      require('fs').readFile(path, 'utf8', function (err, data) {
          if (err) reject(err);
          resolve(data);
      })
  })
}

function co( fn ) {

    var gen = fn();
    function next(err,data){   
        var result = gen.next(data);
        if(!result.done){           
            result.value(next); 
        }
    }
    next();

}


/// thunkify 封装
var co = require('co');
var thunkify = require("thunkify");
// 模拟一个普通的异步请求类似readFile，不是thunk风格，有两个参数第一个是函数参数，第二个是回调
function myThunk(userName,callback)
{
    setTimeout(function(){
        callback(null,"hello "+userName );
    },200)
}
// myR 是封装之后符合thunk风格的函数
var myR  =thunkify(myThunk);
co(function *(){
    var a = yield myR("a");
    console.log(a);
    return "over";
}).then(function(r){
    console.log(r);
})

// 等价上面
var co = require('co');
function myR(userName)
{
    return function(callback)
    {
        setTimeout(function () {
            callback(null,"hello "+userName );
        },200)
    }
}
co(function *(){
    var a = yield myR("a");
    console.log(a);
    return "over";
}).then(function(r){
    console.log(r);
})