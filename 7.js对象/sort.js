var data = [{
  "code": "JEEP",
  "level": "1",
  "parent_id": "0",
  "product_id": "1",
  "sort": "0",
  "name_cn": "Jeep"
},
{
  "code": "CHRYSLER",
  "level": "1",
  "parent_id": "0",
  "product_id": "2",
  "sort": "0",
  "name_cn": "克莱斯勒"
},
{
  "code": "DODGE",
  "level": "1",
  "parent_id": "0",
  "product_id": "3",
  "sort": "0",
  "name_cn": "道奇"
},
{
  "code": "FIAT",
  "level": "1",
  "parent_id": "0",
  "product_id": "4",
  "sort": "0",
  "name_cn": "菲亚特"
},
{
  "code": "CHEROKEE",
  "level": "2",
  "parent_id": "1",
  "product_id": "5",
  "sort": "18",
  "name_cn": "进口自由光"
},
{
  "code": "COMPASS 2.0",
  "level": "2",
  "parent_id": "1",
  "product_id": "6",
  "sort": "19",
  "name_cn": "指南者2.0"
},
{
  "code": "GRAND CHEROKEE",
  "level": "2",
  "parent_id": "1",
  "product_id": "7",
  "sort": "7",
  "name_cn": "大切诺基3.6/5.7/6.4"
},
{
  "code": "PATRIOT",
  "level": "2",
  "parent_id": "1",
  "product_id": "8",
  "sort": "20",
  "name_cn": "自由客"
},
{
  "code": "WRANGLER",
  "level": "2",
  "parent_id": "1",
  "product_id": "9",
  "sort": "8",
  "name_cn": "牧马人"
},
{
  "code": "COMPASS 2.4",
  "level": "2",
  "parent_id": "1",
  "product_id": "11",
  "sort": "21",
  "name_cn": "指南者2.4"
},
{
  "code": "GRAND CHEROKEE 3.0",
  "level": "2",
  "parent_id": "1",
  "product_id": "12",
  "sort": "6",
  "name_cn": "大切诺基3.0"
},
{
  "code": "K42.4",
  "level": "2",
  "parent_id": "1",
  "product_id": "15",
  "sort": "4",
  "name_cn": "全新Jeep自由光2.4L"
},
{
  "code": "K42.0",
  "level": "2",
  "parent_id": "1",
  "product_id": "17",
  "sort": "5",
  "name_cn": "全新Jeep自由光2.0L"
},
{
  "code": "B523 1.4",
  "level": "2",
  "parent_id": "1",
  "product_id": "19",
  "sort": "2",
  "name_cn": "全新Jeep自由侠1.4T"
},
{
  "code": "B523 2.0",
  "level": "2",
  "parent_id": "1",
  "product_id": "20",
  "sort": "3",
  "name_cn": "全新Jeep自由侠2.0L"
},
{
  "code": "C553",
  "level": "2",
  "parent_id": "1",
  "product_id": "21",
  "sort": "0",
  "name_cn": "全新Jeep指南者1.4T"
},
{
  "code": "C553 2.4",
  "level": "2",
  "parent_id": "1",
  "product_id": "22",
  "sort": "1",
  "name_cn": "全新Jeep指南者2.4L"
},
{
  "code": "300C",
  "level": "2",
  "parent_id": "2",
  "product_id": "23",
  "sort": "10",
  "name_cn": "300C"
},
{
  "code": "GRAND VOYAGER",
  "level": "2",
  "parent_id": "2",
  "product_id": "24",
  "sort": "11",
  "name_cn": "大捷龙"
},
{
  "code": "JOURNEY",
  "level": "2",
  "parent_id": "3",
  "product_id": "29",
  "sort": "12",
  "name_cn": "酷威"
},
{
  "code": "343",
  "level": "2",
  "parent_id": "4",
  "product_id": "32",
  "sort": "13",
  "name_cn": "菲翔"
},
{
  "code": "343-1",
  "level": "2",
  "parent_id": "4",
  "product_id": "33",
  "sort": "14",
  "name_cn": "致悦"
},
{
  "code": "500",
  "level": "2",
  "parent_id": "4",
  "product_id": "361",
  "sort": "15",
  "name_cn": "500"
},
{
  "code": "BRAVO",
  "level": "2",
  "parent_id": "4",
  "product_id": "362",
  "sort": "16",
  "name_cn": "博悦"
},
{
  "code": "FREEMONT",
  "level": "2",
  "parent_id": "4",
  "product_id": "363",
  "sort": "17",
  "name_cn": "菲跃"
},
{
  "code": "RU",
  "level": "2",
  "parent_id": "2",
  "product_id": "376",
  "sort": "33",
  "name_cn": "全新大捷龙"
},
{
  "code": "K8 2.0",
  "level": "2",
  "parent_id": "1",
  "product_id": "556",
  "sort": "9",
  "name_cn": "全新Jeep大指挥官 2.0T"
},
{
  "code": "RU PHEV 3.6",
  "level": "2",
  "parent_id": "2",
  "product_id": "567",
  "sort": "34",
  "name_cn": "大捷龙插电混动 3.6L"
}
];


function compare(property){
  return function(obj1,obj2){
      var value1 = obj1[property];
      var value2 = obj2[property];
      return value1 - value2;     // 升序
  }
}
data.sort(compare("sort"));

console.log(data);
