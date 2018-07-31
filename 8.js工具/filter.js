let spread = [12, 5, 8, 130, 44]
let spreaded = spread.filter(n => n > 10)
console.log(spreaded) // 返回新数组

//键值进行查询
let users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'ared', age: 24, active: false },
  { user: 'ered', age: 80, active: false },
  { abc: 'ered', age: 80, active: false }
]
let filtered = users.filter(n => n.age == 80)
// console.log(filtered);

var arr1 = [1, 2, 3, 3, 4, 6, 6, 12, 12]
var result = []
var obj = {}
for (let i = 0; i < arr1.length; i++) {
  if (!obj[arr1[i]]) {
    obj[arr1[i]] = true
    result.push(arr1[i])
  }
}

// 数组去重
let spread1 = [12, 5, 8, 8, 130, 44, 130]
let filtered1 = spread1.filter((item, idx, arr) => {
  // console.log(arr.indexOf(item)) // arr.indexOf()默认找的是数组中第一个
  return arr.indexOf(item) == idx
})
// console.log(filtered1);

// 删除空字符串
let spread2 = ['A', '', 'B', null, undefined, 'C', '  ']
let filter2 = spread2.filter((item, idx, arr) => {
  return item && item.trim()
})
console.log(filter2)

let arr = [
  {
    gender: 'man',
    name: 'john'
  },
  {
    gender: 'woman',
    name: 'mark'
  },
  {
    gender: 'man',
    name: 'jerry'
  }
]
var newArr = arr.filter(n => n.gender == 'man').map(item => item.name + 44) //map 进行计算包装
console.log(newArr)

// 奇数存入数组
var oddArr = [12, 3, 4, 5, 67, 3, 23, 54, , 32, 14, 67, 34].filter(
  item => item % 2 != 0
)
console.log(oddArr)

//  最大值
var max = [1, 32, 2, 1, 45, 23, 89, 12].reduce((pre, cur, idx, arr) => {
  // var maxN =  Math.max(pre,cur);
  // console.log(maxN)
  // console.log(idx)
  return Math.max(pre, cur)
})

// 冒泡排序
function pop(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr.toString()
}
// 快排
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr
  }

  var pivotIndex = Math.floor(arr.length / 2)

  var pivot = arr.splice(pivotIndex, 1)[0]

  var left = []

  var right = []

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

f2()
var num = 123
function f1() {
  console.log(num)
}
function f2() {
  var num = 456
  f1()
}
console.log(num)

function getKebabCase(str) {
  var arr = str.split('')
  str = arr
    .map(function(item) {
      // 大写
      if (item.toUpperCase() === item) {
        return '-' + item.toLowerCase()
      } else {
        return item
      }
    })
    .join('')
  return str
}
console.log(getKebabCase('getElementById')) //get-element-by-id

function getCamelCase(str) {
  var arr = str.split('-')
  return arr
    .map(function(item, index) {
      if (index === 0) {
        return item
      } else {
        return item.charAt(0).toUpperCase() + item.slice(1)
      }
    })
    .join('')
}
console.log(getCamelCase('get-element-by-id'))
