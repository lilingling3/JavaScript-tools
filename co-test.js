
var myf = require('./my-func');
var filename = __dirname + '/text';
var co = require('co');

// console.log(filename);
// myf.readFileTk1(filename)((err, content1)=>{
//   myf.readFileTk1(filename)((err, content2)=>{
//     myf.readFileTk1(filename)((err, content3)=>{
//       myf.readFileTk1(filename)((err, content4)=>{
//         console.log(content1.toString(),content2.toString());
//       })
//     })
//   })
// })

// co(function* () {
//   var content1 = yield myf.readFileTk3(filename);
//   var content2 = yield myf.readFileTk4(filename);
//   // var [content1,content2]  = yield [myf.readFileTk1(filename), myf.readFileTk2(filename)]
//   console.log(content1.toString(), content2.toString());
// })

// async function go(){
//   var content1 = await myf.readFileTk3(filename);
//   var content2 = await myf.readFileTk4(filename);
//   console.log(content1.toString(), content2.toString());
//   return [content1,content2]
// }

// co(function* () {
//   var [content1,content2] = yield go();
//   console.log(content1.toString(), content2.toString());
// })

// myf.readFileTk1(filename)(()=>{

// })

// myf.readFileTk6(filename).then(content=>{
//   console.log(content.toString())
// })

// myf.readFileTk4(filename).then(content=>{
//   console.log(content.toString())
// }).catch(err=> console.log(err));

// co(myf.readFileTk5(filename)).then(content=>console.log(content)).catch(ex=>console.log(ex))



function* go() {
  var content1 = yield myf.readFileTk2(filename);//cb => fs.readFile(filename, cb)
  var content2 = yield myf.readFileTk2(filename);
  var content3 = yield myf.readFileTk2(filename);
  return 5;
}

try {
  var gen = go();
  var ret = gen.next();//ret.done,ret.value
  ret.value((err, content) => {
    console.log(content);
    gen.throw(new Error('gogogogo'))
    if (!ret.done) {
      var ret2 = gen.next();
      ret2.value((err, content) => {
        console.log(content);
        if (!ret2.done) {
          var ret3 = gen.next();
          ret3.value((err, content) => {
            console.log(content);
            if (!ret3.done) {

            } else {
              console.log('done');
            }
          })
        } else {

        }
      })
    } else {

    }
  })
} catch (err) {
  console.log(err.message);
}




