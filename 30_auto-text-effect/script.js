const textEl = document.querySelector('#text')
const inputEl = document.querySelector('#input')

const text = 'We Love Programming!'
const DirectionType = {
  GO: 'go',
  BACK: 'back',
}
let direction = DirectionType.GO // 方向 双向中使用
let speed = 200 / inputEl.value
let currentIndex = 1
let timer

// 单向文字
// const render = () => {
//   textEl.innerHTML = ''
//   clearInterval(timer)
//   timer = setInterval(() => {
//     if (currentIndex <= text.length) {
//       textEl.innerHTML = text.slice(0, currentIndex)
//       currentIndex++
//     } else {
//       currentIndex = 1
//       textEl.innerHTML = ''
//     }
//   }, speed)
// }

// 双向文字
// const render = () => {
//   clearInterval(timer)
//   timer = setInterval(() => {
//     if (direction === DirectionType.GO && currentIndex <= text.length) {
//       textEl.innerHTML = text.slice(0, currentIndex)
//       currentIndex++
//       if (currentIndex > text.length) direction = DirectionType.BACK
//     } else if (direction === DirectionType.BACK && currentIndex >= 0) {
//       textEl.innerHTML = textEl.innerHTML.slice(0, -1)
//       currentIndex--
//       if (currentIndex <= 0) direction = DirectionType.GO
//     }
//   }, speed)
// }

// setTimeout 写法
const render = () => {
  if (direction === DirectionType.GO && currentIndex <= text.length) {
    textEl.innerHTML = text.slice(0, currentIndex)
    currentIndex++
    if (currentIndex > text.length) direction = DirectionType.BACK
  } else if (direction === DirectionType.BACK && currentIndex >= 0) {
    textEl.innerHTML = textEl.innerHTML.slice(0, currentIndex)
    currentIndex--
    if (currentIndex <= 0) direction = DirectionType.GO
  }

  setTimeout(render, speed)
}

inputEl.addEventListener('input', e => {
  speed = 200 / e.target.value

  // render() // setTimeout不需要这一步
})

render()
