var data = { "data": { "weekList": [{ "wk_end_date": "2017/09/03", "weeks_num": "35", "year_num": "2017", "wk_start_date": "2017/08/28" }, { "wk_end_date": "2017/09/10", "weeks_num": "36", "year_num": "2017", "wk_start_date": "2017/09/04" }, { "wk_end_date": "2017/09/17", "weeks_num": "37", "year_num": "2017", "wk_start_date": "2017/09/11" }, { "wk_end_date": "2017/09/24", "weeks_num": "38", "year_num": "2017", "wk_start_date": "2017/09/18" }, { "wk_end_date": "2017/10/01", "weeks_num": "39", "year_num": "2017", "wk_start_date": "2017/09/25" }, { "wk_end_date": "2017/10/08", "weeks_num": "40", "year_num": "2017", "wk_start_date": "2017/10/02" }, { "wk_end_date": "2017/10/15", "weeks_num": "41", "year_num": "2017", "wk_start_date": "2017/10/09" }, { "wk_end_date": "2017/10/22", "weeks_num": "42", "year_num": "2017", "wk_start_date": "2017/10/16" }, { "wk_end_date": "2017/10/29", "weeks_num": "43", "year_num": "2017", "wk_start_date": "2017/10/23" }, { "wk_end_date": "2017/11/05", "weeks_num": "44", "year_num": "2017", "wk_start_date": "2017/10/30" }, { "wk_end_date": "2017/11/12", "weeks_num": "45", "year_num": "2017", "wk_start_date": "2017/11/06" }, { "wk_end_date": "2017/11/19", "weeks_num": "46", "year_num": "2017", "wk_start_date": "2017/11/13" }, { "wk_end_date": "2017/11/26", "weeks_num": "47", "year_num": "2017", "wk_start_date": "2017/11/20" }, { "wk_end_date": "2017/12/03", "weeks_num": "48", "year_num": "2017", "wk_start_date": "2017/11/27" }, { "wk_end_date": "2017/12/10", "weeks_num": "49", "year_num": "2017", "wk_start_date": "2017/12/04" }, { "wk_end_date": "2017/12/17", "weeks_num": "50", "year_num": "2017", "wk_start_date": "2017/12/11" }, { "wk_end_date": "2017/12/24", "weeks_num": "51", "year_num": "2017", "wk_start_date": "2017/12/18" }, { "wk_end_date": "2017/12/31", "weeks_num": "52", "year_num": "2017", "wk_start_date": "2017/12/25" }, { "wk_end_date": "2018/01/07", "weeks_num": "1", "year_num": "2018", "wk_start_date": "2018/01/01" }, { "wk_end_date": "2018/01/14", "weeks_num": "2", "year_num": "2018", "wk_start_date": "2018/01/08" }, { "wk_end_date": "2018/01/21", "weeks_num": "3", "year_num": "2018", "wk_start_date": "2018/01/15" }, { "wk_end_date": "2018/01/28", "weeks_num": "4", "year_num": "2018", "wk_start_date": "2018/01/22" }, { "wk_end_date": "2018/02/04", "weeks_num": "5", "year_num": "2018", "wk_start_date": "2018/01/29" }, { "wk_end_date": "2018/02/11", "weeks_num": "6", "year_num": "2018", "wk_start_date": "2018/02/05" }, { "wk_end_date": "2018/02/18", "weeks_num": "7", "year_num": "2018", "wk_start_date": "2018/02/12" }, { "wk_end_date": "2018/02/25", "weeks_num": "8", "year_num": "2018", "wk_start_date": "2018/02/19" }, { "wk_end_date": "2018/03/04", "weeks_num": "9", "year_num": "2018", "wk_start_date": "2018/02/26" }, { "wk_end_date": "2018/03/11", "weeks_num": "10", "year_num": "2018", "wk_start_date": "2018/03/05" }, { "wk_end_date": "2018/03/18", "weeks_num": "11", "year_num": "2018", "wk_start_date": "2018/03/12" }, { "wk_end_date": "2018/03/25", "weeks_num": "12", "year_num": "2018", "wk_start_date": "2018/03/19" }, { "wk_end_date": "2018/04/01", "weeks_num": "13", "year_num": "2018", "wk_start_date": "2018/03/26" }, { "wk_end_date": "2018/04/08", "weeks_num": "14", "year_num": "2018", "wk_start_date": "2018/04/02" }], "monthList": [{ "mth_end_date": "2017/09/30", "mth_start_date": "2017/09/01", "mth_num": "201709" }, { "mth_end_date": "2017/10/31", "mth_start_date": "2017/10/01", "mth_num": "201710" }, { "mth_end_date": "2017/11/30", "mth_start_date": "2017/11/01", "mth_num": "201711" }, { "mth_end_date": "2017/12/31", "mth_start_date": "2017/12/01", "mth_num": "201712" }, { "mth_end_date": "2018/01/31", "mth_start_date": "2018/01/01", "mth_num": "201801" }, { "mth_end_date": "2018/02/28", "mth_start_date": "2018/02/01", "mth_num": "201802" }, { "mth_end_date": "2018/03/31", "mth_start_date": "2018/03/01", "mth_num": "201803" }, { "mth_end_date": "2018/04/30", "mth_start_date": "2018/04/01", "mth_num": "201804" }] } }

var wrap = ({ weekList, monthList }) => {
  console.log(weekList)
  var months = [], weeksObj = [], weeksForFind = {}, monthsForFind = {}, monthsObj = {};
  weekList = weekList.sort((a, b) => {
    return a.year_num - b.year_num;
  }).sort((a, b) => {
    if (a.year_num == b.year_num) {
      return a.weeks_num - b.weeks_num
    } else {
      return a.year_num - b.year_num;
    }
  });
  monthList = monthList.sort((a, b) => {
    return a.mth_num - b.mth_num;
  });

  weekList.map((v, index) => {
    weeksForFind[v.year_num + '-' + v.weeks_num] = { ...v, index };
    if (!weeksObj[v.year_num]) weeksObj[v.year_num] = { label: v.year_num, value: v.year_num, children: [] };
    weeksObj[v.year_num].children.push({ label: 'W.' + v.weeks_num, value: 'W.' + v.weeks_num + '|' + v.wk_start_date + '|' + v.wk_end_date });
  })
  var weeks = [];
  for (var y in weeksObj) {
    weeks.push(weeksObj[y]);
  }
  monthList.map((v, index) => {
    var year_num = v.mth_num.substr(0, 4);
    var month_num = v.mth_num.substr(4, 2);
    monthsForFind[year_num + '-' + month_num] = { ...v, index, year_num, month_num };
    if (!monthsObj[year_num]) monthsObj[year_num] = { label: year_num, value: year_num, children: [] };
    monthsObj[year_num].children.push({ label: 'M.' + month_num, value: 'M.' + month_num + '|' + v.mth_start_date + '|' + v.mth_end_date });
  })

  for (var item in monthsObj) {
    months.push(monthsObj[item]);
  }
  console.log(JSON.stringify({ months, monthsForFind }));
  return { weeks, weeksForFind, months, monthsForFind };
}

wrap(data.data);