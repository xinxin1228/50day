const loveMeEl = document.querySelector('.loveMe')
const clickNumEl = document.querySelector('#clickNum')
const checkboxEl = document.querySelector('#checkbox')

let clickNum = 0
let clickDom
const loveElementPool = [] // 对象池 优化性能 存储已经创建的loveEl, 这样用户快速点击的时间，避免了大量的DOM创建 有利于性能的优化

loveMeEl.addEventListener('click', e => {
  const isChecked = checkboxEl.checked
  if (!isChecked && clickDom) return
  const loveEl = createLoveEl(e)
  clickNum++
  clickDom = loveEl

  loveMeEl.append(loveEl)
  clickNumEl.innerHTML = clickNum
  setTimeout(() => {
    loveEl.remove()
    loveElementPool.push(loveEl)
    clickDom = null
  }, 1000)
})

const createLoveEl = e => {
  let loveEl
  if (loveElementPool.length) {
    loveEl = loveElementPool.pop()
  } else {
    loveEl = document.createElement('span')
    loveEl.className = 'love'
    loveEl.innerHTML = '<i class="iconfont icon-aixin_shixin"></i>'
  }

  loveEl.style.left = e.pageX - loveMeEl.offsetLeft - 15 + 'px'
  loveEl.style.top = e.pageY - loveMeEl.offsetTop - 15 + 'px'

  return loveEl
}
