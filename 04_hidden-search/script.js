const searchEl = document.querySelector('.search')
const btnEL = document.querySelector('#search')
const inputEl = document.querySelector('#input')

btnEL.addEventListener('click', () => {
  searchEl.classList.toggle('active')
  inputEl.focus()
}, false)

// 拓展
const searchEl2 = document.querySelector('.search2')
const btnEL2 = document.querySelector('#search2')
const inputEl2 = document.querySelector('#input2')

btnEL2.addEventListener('click', () => {
  inputEl2.focus()
}, false)

