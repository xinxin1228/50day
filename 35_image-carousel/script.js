import { throttle } from '/assets/utils.js'

const imgsEl = document.querySelector('.imgs')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')
const bannerEl = document.querySelector('.banner')

const imgs = [
  'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
]
const MoveType = {
  Left: 'left',
  Right: 'right',
}
let currentIndex = 1
let timer

const throttleMove = throttle(move, 500)

renderImgsDOM()
// nextEl.addEventListener(
//   'click',
//   throttle(move, 1000).bind(null, MoveType.Right)
// )
nextEl.addEventListener('click', () => throttleMove(MoveType.Right))
prevEl.addEventListener('click', () => throttleMove(MoveType.Left))
bannerEl.addEventListener('mouseenter', () => stopTimer())
bannerEl.addEventListener('mouseleave', () => {
  startTimer()
})

function startTimer() {
  stopTimer()
  timer = setInterval(move, 2000, MoveType.Right)
}
function stopTimer() {
  clearInterval(timer)
}

startTimer()

function move(type) {
  imgsEl.style.transition = `transform .5s`
  if (type === MoveType.Right) {
    currentIndex++

    if (currentIndex >= imgs.length + 1) {
      setTimeout(() => {
        currentIndex = 1
        imgsEl.style.transform = `translateX(-${currentIndex * 500}px)`
        imgsEl.style.transition = `transform 0s`
      }, 500)
    }
  } else {
    currentIndex--

    if (currentIndex <= 0) {
      setTimeout(() => {
        currentIndex = imgs.length
        imgsEl.style.transform = `translateX(-${currentIndex * 500}px)`
        imgsEl.style.transition = `transform 0s`
      }, 500)
    }
  }

  imgsEl.style.transform = `translateX(-${currentIndex * 500}px)`
}

// 生成列表
function renderImgsDOM() {
  imgsEl.innerHTML = [imgs.at(-1), ...imgs, imgs.at(0)]
    .map(
      item => `<img
            src=${item}
            alt=${item}
          />`
    )
    .join('')
}
