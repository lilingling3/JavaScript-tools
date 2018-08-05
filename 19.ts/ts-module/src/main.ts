import * as $ from 'jquery'
// OwnSpace.var_a
import _ from 'lodash'
// _.name

import bar from 'bar'

class Album{
  lable1:Album.Albumlable;
  lable2:typeof Album.Albumlable = Album.Albumlable
}

namespace Album{
  export class Albumlable{
    id:string;
    static id2:string
  }
}
let a = new Album();
a.lable1.id //
a.lable2.id2 //

function testB(){
  console.log('ll')
}

testB()


