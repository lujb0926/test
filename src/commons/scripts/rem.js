(function (doc, win) {
  const design = 750
  const docEl = doc.documentElement
  const clientWidth = docEl.clientWidth
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = () => {
    if (!clientWidth) return
    const ratid = clientWidth / design
    docEl.style.fontSize = ratid * 100 + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
