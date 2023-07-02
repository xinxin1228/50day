const circleElList = document.querySelectorAll('.circle')
const progressEl = document.querySelector('#progress')
const prevEl = document.querySelector('#prev')
const nextEl = document.querySelector('#next')

let index = 0

nextEl.addEventListener('click', () => {
  index = Math.min(index + 1, circleElList.length - 1)
  addActiveClass()
})

prevEl.addEventListener('click', () => {
  index = Math.max(index - 1, 0)
  addActiveClass()
})

// 禁用 
function circleDisabled() {
  if (index >= circleElList.length - 1) nextEl.disabled = true
  if (index !== circleElList.length - 1) nextEl.disabled = false
  if (index !== 0) {
    prevEl.disabled = false
  } else {
    prevEl.disabled = true
  }
}

// 添加选中和进度变化
function addActiveClass() {
  circleElList.forEach((item, i) => {
    if (i > index) {
      item.classList.remove('active')
    } else {
      item.classList.add('active')
    }
  })

  progressEl.style.width = `${(index) / (circleElList.length - 1) * 100}%`

  circleDisabled()
}
