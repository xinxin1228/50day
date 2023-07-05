const iconEl = document.querySelector('.icon')
const navEl = document.querySelector('nav')

iconEl.addEventListener('click', () => {
  navEl.classList.toggle('hide')
})
