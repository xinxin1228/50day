const openEl = document.querySelector('.open')
const closeEl = document.querySelector('.close')
const menuListEl = document.querySelectorAll('.menu')

openEl.addEventListener('click', () => {
  menuListEl.forEach(item => item.classList.add('show'))
})

closeEl.addEventListener('click', () => {
  menuListEl.forEach(item => item.classList.remove('show'))
})
