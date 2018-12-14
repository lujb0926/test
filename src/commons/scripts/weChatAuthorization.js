import { HOST_WX } from '@/api/config'
import { Store } from '@/commons/scripts/store'
import { eventHub } from '@/commons/scripts/eventhub'

export function weChatAuthorization (appid, uid, sig, timestamp) {
  let url = HOST_WX + `/uid/oauth?appid=${appid}&redirect_uri=` + encodeURIComponent(window.location.href)
  if (uid && sig && timestamp) {
    Store.set('weChatAuthorization', {
      appid: appid,
      uid: uid,
      sig: sig,
      timestamp: timestamp
    })
    eventHub.$emit('weChatAuthorization')
  }
  if (!Store.get('weChatAuthorization') || appid !== Store.get('weChatAuthorization').appid) {
    window.location = url
  }
}
