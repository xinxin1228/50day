const containerEl = document.querySelector('.container')
const ratingListEl = document.querySelectorAll('.ratings .rating')
const btnEl = document.querySelector('.btn')
let currentActiveEl

for (const item of ratingListEl) {
  item.addEventListener('click', () => {
    currentActiveEl?.classList.remove('active')
    item.classList.add('active')
    currentActiveEl = item
  })
}

btnEl.addEventListener('click', () => {
  containerEl.innerHTML = `
    <i class="iconfont icon-aixin_shixin"></i>
    <p>Thank You!</p>
    <p>Feedback: ${currentActiveEl.innerText}</p>
    <p>We'll use your feedback to improve our <br />customer support</p>
  `
})
