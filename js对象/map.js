var rowData = [
  {
    "series_name": "500",
    "group_code_L2": "500",
    "CC_NAME": "500"
  },
  {
    "series_name": "BRAVO",
    "group_code_L2": "BRAVO",
    "CC_NAME": "博悦"
  },
  {
    "series_name": "BSUV",
    "group_code_L2": "B523 1.4",
    "CC_NAME": "自由侠1.4T"
  },
  {
    "series_name": "BSUV",
    "group_code_L2": "B523 2.0",
    "CC_NAME": "自由侠2.0L"
  },
  {
    "series_name": "CSUV",
    "group_code_L2": "C553",
    "CC_NAME": "指南者1.4T"
  },
  {
    "series_name": "CSUV",
    "group_code_L2": "C553 2.4",
    "CC_NAME": "指南者2.4L"
  },
  {
    "series_name": "FIAT",
    "group_code_L2": "343",
    "CC_NAME": "菲翔"
  },
  {
    "series_name": "FIAT",
    "group_code_L2": "343-1",
    "CC_NAME": "致悦"
  },
  {
    "series_name": "FREEMONT",
    "group_code_L2": "FREEMONT",
    "CC_NAME": "菲跃"
  },
  {
    "series_name": "JC",
    "group_code_L2": "JOURNEY",
    "CC_NAME": "酷威"
  },
  {
    "series_name": "JK",
    "group_code_L2": "WRANGLER",
    "CC_NAME": "牧马人"
  },
  {
    "series_name": "K4",
    "group_code_L2": "K42.0",
    "CC_NAME": "自由光2.0L"
  },
  {
    "series_name": "K4",
    "group_code_L2": "K42.4",
    "CC_NAME": "自由光2.4L"
  },
  {
    "series_name": "K8",
    "group_code_L2": "K8 2.0",
    "CC_NAME": "大指挥官2.0T"
  },
  {
    "series_name": "KL",
    "group_code_L2": "CHEROKEE",
    "CC_NAME": "自由光"
  },
  {
    "series_name": "LX",
    "group_code_L2": "300C",
    "CC_NAME": "300C"
  },
  {
    "series_name": "MK49",
    "group_code_L2": "COMPASS 2.0",
    "CC_NAME": "指南者2.0"
  },
  {
    "series_name": "MK49",
    "group_code_L2": "COMPASS 2.4",
    "CC_NAME": "指南者2.4"
  },
  {
    "series_name": "MK74",
    "group_code_L2": "PATRIOT",
    "CC_NAME": "自由客"
  },
  {
    "series_name": "RT",
    "group_code_L2": "GRAND VOYAGER",
    "CC_NAME": "大捷龙"
  },
  {
    "series_name": "RU",
    "group_code_L2": "RU",
    "CC_NAME": "Pacifica"
  },
  {
    "series_name": "RU",
    "group_code_L2": "RU PHEV 3.6",
    "CC_NAME": "大捷龙3.6L"
  },
  {
    "series_name": "WK",
    "group_code_L2": "GRAND CHEROKEE",
    "CC_NAME": "大切诺基3.6L"
  },
  {
    "series_name": "WK",
    "group_code_L2": "GRAND CHEROKEE 3.0",
    "CC_NAME": "大切诺基3.0"
  }
];
var data = getModelMap(rowData);
console.log(data);
// 联动拼接成对象
function getModelMap(carModelsInfo) {
  var map = {};
  carModelsInfo.forEach((item) => {
    if (!map[item.series_name]) map[item.series_name] = {};
    map[item.series_name][item.group_code_L2] = item.CC_NAME;
  })
  return map;
}