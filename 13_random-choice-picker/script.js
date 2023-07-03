import { shakeFun } from '/assets/utils.js'

const inputEl = document.querySelector('#input')
const tagsEl = document.querySelector('.tags')
const resultEl = document.querySelector('.result')
const activeTime = 3000 // 总的动画时间
const speedTime = 50 // 动画间隔时间
let activeEl
let timer
let timer2

inputEl.focus()

// 键盘按下
const handleInput = () => {
  console.log('执行')
  clearTimeout(timer2)
  if (!inputEl.value.trim()) return

  showOrHideResult()
  clearInterval(timer)
  timer = setInterval(animateTag, speedTime)

  timer2 = setTimeout(() => {
    clearInterval(timer)
    showOrHideResult(true, activeEl.textContent)
  }, activeTime)
}
// 添加防抖
const shakeHandleInput = shakeFun(handleInput)

inputEl.addEventListener('input', e => {
  const val = e.target.value

  tagsEl.innerHTML = val
    .split(',')
    .filter(x => Boolean(x.trim()))
    .map(item => `<div class='tag'>${item}</div>`)
    .join('')
})
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return
  e.preventDefault()
  shakeHandleInput()
})

// 动画
const animateTag = () => {
  const tagElList = tagsEl.querySelectorAll('.tag')
  const len = tagElList.length
  const num = (Math.random() * len) | 0

  clearActive()
  activeEl = tagElList[num]
  activeEl.classList.add('active')
}
// 清除选中
const clearActive = () => {
  const tagElList = tagsEl.querySelectorAll('.tag')

  tagElList.forEach(item => item.classList.remove('active'))
}
// 显示与隐藏结果
const showOrHideResult = (type = false, value) => {
  if (type) {
    resultEl.innerHTML = `系统随机选择的结果是：${value}`
    resultEl.style.display = 'block'
  } else {
    resultEl.innerHTML = ``
    resultEl.style.display = 'none'
  }
}
