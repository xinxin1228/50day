const incEl = document.querySelector('#inc')
const numEl = document.querySelector('#num')
const addEl = document.querySelector('#add')
const colorEl = document.querySelector('#color')
const clearEl = document.querySelector('#clear')
const canvasEl = document.querySelector('#canvas')

const stepNum = 5
const minNum = 5
const maxNum = 50
let x
let y
let color = colorEl.value
let size = +numEl.innerHTML
let isPressed = false

const ctx = canvasEl.getContext('2d')

const handleMouseMove = e => {
  const x2 = e.offsetX
  const y2 = e.offsetY

  drawCircle(x2, y2)
  drawLine(x, y, x2, y2)

  x = x2
  y = y2
}
const handlePenSizeChange = (type, step = stepNum) => {
  if (type === 'add') {
    if (size >= maxNum) return
    size += step
  } else {
    if (size <= minNum) return
    size -= step
  }

  numEl.innerHTML = size
}

canvasEl.addEventListener('mousedown', e => {
  x = e.offsetX
  y = e.offsetY
  canvasEl.addEventListener('mousemove', handleMouseMove)
})
document.addEventListener('mouseup', e => {
  x = undefined
  y = undefined
  canvasEl.removeEventListener('mousemove', handleMouseMove)
})

colorEl.addEventListener('change', e => (color = e.target.value))
incEl.addEventListener('click', () => handlePenSizeChange('inc'))
addEl.addEventListener('click', () => handlePenSizeChange('add'))
clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
)

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}
