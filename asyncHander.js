
var arr = [1, 2, 3];
var co = require('co')
// var async = function* () {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(i);
//   };
// };

// async()

var testAsync = function* () {
  console.log('8888')
  return 'testAsync'
};
var testAsync1 = function* () {
  console.log('8889999')
};

// yield 驱动generator 
co(function* () {
  yield testAsync();
  yield testAsync1();
})
// co 驱动generator 
co(testAsync())
  .then(content => console.log(content))
  .catch(ex => console.log(ex))

