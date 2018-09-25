var urlData = {
  method: "/test",
  param: [{ key: "name", value: "lingling"},{key: "name1", value: "lingling1" }]
};


let url = urlData.method + '?' + urlData.param.map(item => {
  return item.key + '=' + item.value;
}).join('&');

console.log('urlString', url);
