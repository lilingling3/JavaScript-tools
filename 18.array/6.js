// var test = 1
// test += 4
// test += 4
// console.log(test)

var data = 
  {
    name: '中国',
    children: [
      {
        name: '教第三节课'
      },
      {
        name: '教呼呼',
        children: [
          {
            name: '大一',
            children: [
              {
                name: '课程1',
                children: [
                  {
                    name: '1231'
                  },
                  {
                    name: '121'
                  }
                ]
              },
              {
                name: '课程2',
                children: [
                  {
                    name: '1232'
                  },
                  {
                    name: '122'
                  }
                ]
              },
              {
                name: '课程3',
                children: [
                  {
                    name: '1233'
                  },
                  {
                    name: '123'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: '活动',
        children: [
          {
            name: '123'
          }
        ]
      }
    ]
  }


function array(data,name){
  if(data.name == name){
    console.log('找到了')
  }else{
    if(data.children){
      for(var i=0;i<data.children.length;i++){
        array(data.children[i],name)
      }
    } 
  }
}

array(data,'121')

console.log(18446744073709551616/50000)