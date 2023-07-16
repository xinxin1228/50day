const btnEl = document.querySelector('#btn')
const noticesEl = document.querySelector('.notices')

const messageList = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]
const statusList = ['info', 'success', 'warn', 'error']

btnEl.addEventListener('click', () => {
  const noticeEl = document.createElement('div')
  noticeEl.className = `notice ${getRandom(statusList)}`
  noticeEl.innerHTML = getRandom(messageList)

  noticesEl.append(noticeEl)
  noticeEl.classList.add('animate-join')
  setTimeout(() => {
    noticeEl.classList.remove('animate-join')
    noticeEl.classList.add('animate-end')
  }, 500)

  noticeEl.isClear = true
  domRemove(noticeEl)

  // 鼠标移入，停止消失 鼠标移出 继续消失
  noticeEl.addEventListener('mouseenter', () => {
    noticeEl.isClear = false
    noticeEl.addEventListener('mouseout', () => {
      noticeEl.isClear = true
      domRemove(noticeEl)
    })
  })
})

const getRandom = list => list[(Math.random() * list.length) | 0]
const domRemove = el => {
  if (!el.isClear) return
  clearTimeout(el.timer)

  el.timer = setTimeout(() => {
    if (!el.isClear) return
    el.classList.add('animate-out')
    setTimeout(() => el.remove(), 500)
  }, 3000)
}
