const numListEl = [...document.querySelectorAll('.nums span')]
const finalEl = document.querySelector('.final')
const goEl = document.querySelector('.go')
const replayEl = document.querySelector('.replay')

startTiming()

replayEl.addEventListener('click', () => {
  toggle(true)
  startTiming()
})

// 开始计时
function startTiming() {
  let i = 0

  numListEl.forEach((item, index) => {
    setTimeout(() => {
      move(item)
      i++

      if (i >= numListEl.length) {
        setTimeout(toggle, 1000)
        i = 0
      }
    }, index * 1000)
  })
}

// 设置动画
function move(item) {
  item.classList.add('in')

  setTimeout(() => {
    item.classList.remove('in')
    item.classList.add('out')
  }, 1000)
}

function toggle(start = false) {
  if (start) {
    goEl.style.display = 'none'
    finalEl.style.display = 'block'
  } else {
    goEl.style.display = 'block'
    finalEl.style.display = 'none'
  }
}
