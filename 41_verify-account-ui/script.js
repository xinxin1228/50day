const inputListEL = [...document.querySelectorAll('.code input')]
const len = inputListEL.length

inputListEL.forEach((item, index) => {
  item.addEventListener('keydown', e => {
    const valLen = e.target.value.length

    if (e.key === 'Backspace') {
      if (!valLen) {
        inputListEL[Math.max(index - 1, 0)].focus()
      }
    } else if (!isNaN(e.key) && +e.key >= 0 && +e.key <= 9) {
      if (valLen >= 1 && index <= len - 1) {
        inputListEL[Math.min(index + 1, len - 1)].focus()
        if (index > len - 2) inputListEL[index].value = ''
      }
    }
  })
})
