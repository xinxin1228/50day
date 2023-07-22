const labelListEl = document.querySelectorAll('.project input')

labelListEl.forEach(item => {
  item.addEventListener('click', e => {
    const isAllChecked =
      [...labelListEl].filter(item => item.checked).length === 3

    if (!isAllChecked) return

    if (e.target.id === 'good') {
      labelListEl[2].checked = false
    }
    if (e.target.id === 'cheap') {
      labelListEl[0].checked = false
    }
    if (e.target.id === 'fast') {
      labelListEl[1].checked = false
    }
  })
})
