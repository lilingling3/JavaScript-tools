 console.log('1');
 setImmediate(function () {     console.log('2'); });
 setTimeout(function () {    console.log('3'); },0);

 process.nextTick(function () {
     console.log('4');
});