export function delParam (url, paramKey) {
  var urlParam = url.substr(url.indexOf('?') + 1)
  var beforeUrl = url.substr(0, url.indexOf('?'))
  var nextUrl = ''

  var arr = []
  if (urlParam !== '') {
    var urlParamArr = urlParam.split('&')

    for (var i = 0; i < urlParamArr.length; i++) {
      var paramArr = urlParamArr[i].split('=')
      if (paramArr[0] !== paramKey) {
        arr.push(urlParamArr[i])
      }
    }
  }

  if (arr.length > 0) {
    nextUrl = '?' + arr.join('&')
  }
  url = beforeUrl + nextUrl
  return url
}
