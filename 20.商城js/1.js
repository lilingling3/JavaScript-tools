var data = {
  name:'lhl'
}

Object.keys(data).forEach(function(key){
  Object.defineProperty(data,key,{
      enumerable:true,
      configurable:true,
      get:function(){
          console.log('get');
      },
      set:function(){
          console.log('监听到数据发生了变化');
      }
  })
});
data.name //控制台会打印出 “get”
data.name = 'hxx' //控制台会打印出 "监听到数据发生了变化"

