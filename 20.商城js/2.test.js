var obj = {name:''}
var test = obj.name?obj.name:'dd';
console.log(test)

function dateTimeFormater  (time, format) {
  const year = time.getFullYear()
  const month = time.getMonth()
  const day = time.getDate()
  const hours24 = time.getHours()
  const hours = hours24 % 12 === 0 ? 12 : hours24 % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const milliseconds = time.getMilliseconds()
  const dd = t => ('0' + t).slice(-2)
  const map = {
    YYYY: year,
    MM: dd(month + 1),
    M: month + 1,
    DD: dd(day),
    D: day,
    HH: dd(hours24),
    H: hours24,
    hh: dd(hours),
    h: hours,
    mm: dd(minutes),
    m: minutes,
    ss: dd(seconds),
    s: seconds,
    S: milliseconds
  }
  return (format).replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, str => map[str])
}

var testTime =dateTimeFormater(
  new Date(),
  'YYYY-MM-DD'
)

console.log(testTime) // 2018-09-14

// var app = new Express();
// app.use()

var formData = {
  name:'',
  age:''
}
var dataObj = {name:'liling',age:'13'}
formData = Object.assign(formData, dataObj);

console.log(formData)