export const heartCheck = {
  timeout: 5000,
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function () {
    clearTimeout(this.timeoutObj)
    clearTimeout(this.serverTimeoutObj)
    return this
  },
  start: function (ws, barid, appid, activityid, uid) {
    this.timeoutObj = setTimeout(() => {
      let message = {
        controller_name: 'Socket',
        method_name: 'mobileheart',
        params: [
          barid,
          appid,
          activityid,
          uid
        ]
      }
      ws.send(JSON.stringify(message))
      console.log('客户端向服务器端发送心跳请求')
      this.serverTimeoutObj = setTimeout(() => {
        ws.close()
      }, this.timeout)
    }, this.timeout)
  }
}
