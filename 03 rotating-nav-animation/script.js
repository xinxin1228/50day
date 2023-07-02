const openEl = document.querySelector('#open')
const closeEl = document.querySelector('#close')
const allEl = document.querySelector('.all')
const navEl = document.querySelector('nav')

openEl.addEventListener('click', () => allEl.classList.add('show-nav'))
closeEl.addEventListener('click', () => allEl.classList.remove('show-nav'));