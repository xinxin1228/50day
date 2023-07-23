const bannerEl = document.querySelector('.banner')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squareNum = 20 * 25

function renderDOM() {
  const domEl = document.createDocumentFragment()

  for (let i = 0; i < squareNum; i++) {
    const squareEl = document.createElement('div')
    squareEl.className = 'square'

    squareEl.addEventListener(
      'mouseenter',
      () => (squareEl.style.background = getRandomColor())
    )
    squareEl.addEventListener(
      'mouseleave',
      () => (squareEl.style.background = '#1d1d1d')
    )

    domEl.append(squareEl)
  }

  bannerEl.append(domEl)
}

renderDOM()

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
