const headerEl = document.querySelector('header')

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 250) {
    headerEl.classList.add('sticky')
  } else {
    headerEl.classList.remove('sticky')
  }
})
