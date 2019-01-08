// polyfill以防没有
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(val) {
      return this.indexOf(val) != -1;
    }
  });
}
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(check) {
      let index = -1;
      if(!this) {
        throw new TypeError('this is null or not defined');
      }
      if(typeof check == 'function') {
        for(var i=0, len=this.length; i<len; i++) {
          if(check(this[i])) {
            index = i;
            break;
          }
        }
      } else {
        throw new TypeError(`${check} is not founction`);
        return;
      }
      return index;
    }
  });
}
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function(str) {
      if(!this) {
        throw new TypeError('this is null or not defined');
      }
      let index = -1;
      index = this.indexOf(str);
      return index === 0;
    }
  });
}
// 删除数组中某个元素
Object.defineProperty(Array.prototype, 'remove', {
  value: function(val) {
    let index = -1;
    if(typeof val == 'function') {
      index = this.findIndex(val);
    } else {
      index = this.findIndex((v) => {
        return v == val;
      });
    }
    if(index !== -1) {
      return this.splice(index, 1);
    }
    return null;
  }
});


var arr = [1,2,3];
// arr.remove(3)
// console.log(arr)
var str = 'ddd';
let isS = str.startsWith(1);
console.log(isS);
var isI = str.includes('d')
var isA = arr.includes(3)
console.log(isI)
console.log(isA)

var appendNum = 1;
var list = [1,3]

var rs = list.slice(-appendNum).concat(list).concat(list.slice(0, appendNum))
console.log(rs)
