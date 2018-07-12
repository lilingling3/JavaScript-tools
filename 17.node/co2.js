
var thunkify = require('thunkify');
var fs = require('fs')
var co = require('co');
var util = require('util');
const FILE = __dirname + '/text';
// yeild ==>thunk promise
// thunkify
var fileRead1 = thunkify(fs.readFile)
var gen1 = function *(filename){
  var content = yield fileRead1(filename);
  return content;
}
co(gen1(FILE)).then((content)=>console.log('fileRead1 gen1 ==>>'+content.toString()))
              .catch((err)=>console.log('error'))

// thunk
var fileRead2 = function(filename){
  return cb => fs.readFile(filename,(err,data)=>{
    err?cb(err):cb(null,data)
  })
}   
var gen2 = function *(filename){
  var content = yield fileRead2(filename);
  return content;
}
co(gen2(FILE)).then((content)=>console.log('fileRead2 gen2==>>'+content.toString()))
              .catch((err)=>console.log('error'))
// promise
var fileRead3 = util.promisify(fs.readFile);

async function as1(filename){
  // await promise
  var content = await fileRead3(filename);
  return content;
}
as1(FILE).then((content)=>console.log('fileRead3 as1 ==>>'+content.toString()))

var gen3 = function *(filename){
  var content = yield fileRead3(filename);
  return content;
}
co(gen3(FILE)).then((content)=>console.log('fileRead3 gen3==>>'+content.toString()))
              .catch((err)=>console.log('error'))

var fileRead4  = function (filename){
  return new Promise((resolve,reject)=>{
    fs.readFile(filename,(err,content)=>{
      err?reject(err):resolve(content)
    })
  })
}
var gen4 = function *(filename){
  var content = yield fileRead4(filename);
  return content;
}
co(gen4(FILE)).then((content)=>console.log('fileRead4 gen4==>>'+content.toString()))
              .catch((err)=>console.log('error'))
async function as2(filename){
  // await promise
  var content = await fileRead3(filename);
  return content;
}
as2(FILE).then((content)=>console.log('fileRead4 as2 ==>>'+content.toString()))
         .catch((e)=>console.log(e))