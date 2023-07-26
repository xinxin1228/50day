const rangeEl = document.querySelector('#range')
const labelEl = document.querySelector('.range label')
const maxNum = rangeEl.max || 100
const minNum = rangeEl.min || 0


rangeEl.addEventListener('input', e => {
  const val = e.target.value

  labelMove(val)
})

function labelMove(val) {
  labelEl.textContent = val
  labelEl.style.left = (val / (maxNum - minNum) * 100) + '%'
}

labelMove(rangeEl.value)