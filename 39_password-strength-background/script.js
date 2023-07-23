const passwordEl = document.querySelector('#password')
const background = document.querySelector('.background')

passwordEl.addEventListener('input', e => {
  const text = e.target.value
  const blur = 20 - text.length * 2

  background.style.filter = `blur(${blur}px)`
})
