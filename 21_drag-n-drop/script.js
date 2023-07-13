const imgEl = document.querySelector('.img')
const dragElList = document.querySelectorAll('.drag')
let oldEl

imgEl.addEventListener('dragstart', function () {
  this.classList.add('hold')
  setTimeout(() => (this.className = 'xx'), 0)
  this.parentNode.classList.add('leaved')
  oldEl = this.parentNode
})
imgEl.addEventListener('dragend', function () {
  this.classList.add('img')
  this.classList.remove('xx')
  oldEl.classList.remove('leaved')
})

for (const drag of dragElList) {
  drag.addEventListener('dragover', e => {
    e.preventDefault()
  })
  drag.addEventListener('dragleave', e => {
    e.target.classList.remove('hovered')
  })
  drag.addEventListener('dragenter', e => {
    e.preventDefault()
    e.target.classList.add('hovered')
  })
  drag.addEventListener('drop', function () {
    this.append(imgEl)
    this.classList.remove('hovered')
  })
}
