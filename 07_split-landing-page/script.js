const leftEl = document.querySelector('.left')
const rightEl = document.querySelector('.right')

leftEl.addEventListener('mouseenter', () => leftEl.classList.add('active'))
leftEl.addEventListener('mouseleave', () => leftEl.classList.remove('active'))

rightEl.addEventListener('mouseenter', () => rightEl.classList.add('active'))
rightEl.addEventListener('mouseleave', () => rightEl.classList.remove('active'))