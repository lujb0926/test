export const Store = {
  get: function (key) {
    let value = localStorage.getItem(key)
    if (value) {
      try {
        let valueJson = JSON.parse(value)
        if (typeof valueJson === 'object') {
          return valueJson
        } else if (typeof valueJson === 'number') {
          return valueJson
        } else if (typeof valueJson === 'string') {
          return valueJson
        }
      } catch (e) {
        return value
      }
    } else {
      return false
    }
  },
  set: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove: function (key) {
    localStorage.removeItem(key)
  },
  clear: function () {
    localStorage.clear()
  }
}

// 批量保存，data是一个字典
Store.setList = function (data) {
  for (var i in data) {
    localStorage.setItem(i, data[i])
  }
}

// 批量删除，list是一个数组
Store.removeList = function (list) {
  for (var i = 0, len = list.length; i < len; i++) {
    localStorage.removeItem(list[i])
  }
}
