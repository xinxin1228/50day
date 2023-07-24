const boxsEl = document.querySelector('.boxs')
const fixedEl = document.querySelector('.fixed')

const domEl = document.createDocumentFragment()
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const boxEl = document.createElement('div')
    boxEl.className = 'box'
    boxEl.style.backgroundPosition = `-${j * 125}px -${i * 125}px`

    domEl.append(boxEl)
  }
}

boxsEl.append(domEl)

fixedEl.addEventListener('click', () => {
  boxsEl.classList.toggle('big')
})
