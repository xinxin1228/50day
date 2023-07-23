const aListEl = [...document.querySelectorAll('nav a')]
const imgListEl = [...document.querySelectorAll('.content img')]

let currentDOM = 0

aListEl.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index === currentDOM) return

    addOrRemoveClass(index)
  })
})

const addOrRemoveClass = index => {
  imgListEl[currentDOM].classList.remove('show')
  aListEl[currentDOM].classList.remove('active')
  currentDOM = index
  imgListEl[index].classList.add('show')
  aListEl[index].classList.add('active')
}
