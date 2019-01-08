function checkAppVersion(version) {
  // const href = window.location.href;
  const href ='https://test.yunshanmeicai.com'; // https://test.yunshanmeicai.com
  if (href.indexOf('app_version') > -1) {
    const appVersion = UrlParams(href)['app_version'];
    if (appVersion && appVersion.indexOf('.')) {
      let arr1 = appVersion.split('.').map(item => parseInt(item));
      let arr2 = version.split('.').map(item => parseInt(item));

      if (arr1[0] > arr2[0]) {
        return true;
      } else if (arr1[0] == arr2[0]) {
        if (arr1[1] > arr2[1]) {
          return true;
        } else if (arr1[1] == arr2[1]){
          if(arr1[2] >= arr2[2]){
            return true;
          }
        }
      }
    }
  }
  return false;
}


console.log(checkAppVersion('2.5.8'))