import { throttle } from '../assets/utils.js'

const arrowLeftEl = document.querySelector('.arrow-left')
const arrowRightEl = document.querySelector('.arrow-right')
const leftSliderEl = document.querySelector('.slider-left .slider-list')
const rightSliderEl = document.querySelector('.slider-right .slider-list')
const slidesLength = leftSliderEl.querySelectorAll('.slider-item').length

let currentIndex = slidesLength - 1
let transitionTime = 500
const Direction = {
  UP: 'up',
  DOWN: 'down',
};

// 添加节流 防止切换太快动画加载不完成
const throttleMove = throttle(move, transitionTime)

arrowLeftEl.addEventListener('click', () => throttleMove(Direction.DOWN))
arrowRightEl.addEventListener('click', () => throttleMove(Direction.UP))

/**
 * 基于左侧的移动方向
 * @param {enum} type down | up
 */
function move(type) {
  if (type === Direction.DOWN) {
    currentIndex = currentIndex >= slidesLength - 1 ? 0 : currentIndex + 1
  } else {
    currentIndex = currentIndex <= 0 ? slidesLength - 1 : currentIndex - 1
  }

  setSliderStyle(leftSliderEl, currentIndex * 100)
  setSliderStyle(rightSliderEl, (slidesLength - 1 - currentIndex) * 100)
}

function setSliderStyle(sliderEl, transformValue) {
  sliderEl.style.transition = `transform ${transitionTime}ms ease-in-out`;
  sliderEl.style.transform = `translateY(-${transformValue}vh)`;
}
