let obj = {
  '20181123_4171185': 1,
  '20181123_4170981': 1,
  '20181123_4170841': 1
};
// 清理历史 不是今天的
for (oneKey in obj) {
  console.log(oneKey);
  // 不是今天的数据，直接删除
  // if (oneKey.indexOf(nowString) == -1) {
  //   delete taskbarPackageStore[oneKey];
  // }
}
