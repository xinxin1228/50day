const drinkEl = document.querySelector('.drink')
const drinkTextEl = document.querySelector('#drink-txt')
const watersEl = document.querySelector('.waters')
const tipsEl = document.querySelector('.tips')
const switchBtnEl = document.querySelector('.switch-btn')
const cupBtnEl = document.querySelector('.cup-btn')
const targetNumEl = document.querySelectorAll('.target-num')

let goal = 2000 // 喝水目标
let speed = 250 // 每杯水量

// 切换目标和每杯水量
switchBtnEl.addEventListener('click', () => {
  goal = prompt('输入每日的目标（单位：L）', goal / 1000)
  if (goal === null) return
  if (goal <= 0) return alert('请输入合适的数量！')
  goal *= 1000

  initData()
  updateDOM()
})
cupBtnEl.addEventListener('click', () => {
  speed = prompt('输入每杯的数量（单位：ml）', speed)
  if (speed === null) return
  if (speed <= 0) return alert('请输入合适的数量！')

  initData()
  updateDOM()
})

// 水杯选中
function cupActive(index) {
  document.querySelectorAll('.water')?.forEach((item, i) => {
    if (i <= index) {
      if (i === index) {
        item.classList.toggle('active')
      }
      if (i < index) item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

// dom渲染
function updateDOM() {
  targetNumEl.forEach(item => (item.innerHTML = goal / 1000))
  let isInt = true
  let num = 0

  if (goal % speed !== 0) {
    isInt = false
    num = Math.floor(goal / speed) + 1
  } else {
    isInt = true
    num = goal / speed
  }

  const domEl = document.createDocumentFragment()
  for (let i = 0; i < num; i++) {
    const waterEl = document.createElement('div')
    waterEl.className = 'water cup-style'
    waterEl.innerHTML = `${speed} <br> ml`
    if (!isInt && i === num - 1) {
      waterEl.innerHTML = `${goal % speed} <br> ml`
    }

    domEl.append(waterEl)
  }
  watersEl.append(domEl)

  watersEl.querySelectorAll('.water')?.forEach((item, index) => {
    item.addEventListener('click', () => {
      cupActive(index)
      const activeEl = document.querySelectorAll('.water.active')
      if (activeEl.length === goal / speed) {
        tipsEl.style.display = 'block'
      } else {
        tipsEl.style.display = 'none'
      }

      const scale = (((activeEl.length * speed) / goal) * 100).toFixed(2) + '%'
      drinkTextEl.innerHTML = scale
      drinkEl.style.height = scale
    })
  })
}

// 重制数据
function initData() {
  document
    .querySelectorAll('.water')
    .forEach(item => item.classList.remove('active'))

  tipsEl.style.display = 'none'
  drinkEl.style.height = 0
  watersEl.innerHTML = ''
}

updateDOM()
