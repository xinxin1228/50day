const showEl = document.querySelector('.show')

document.addEventListener('keydown', (e) => {
  showEl.innerHTML = `
    <p>${e.key} event.key</p>
    <p>${e.keyCode} event.keyCode</p>
    <p>${e.code} event.code</p>
  `
}, false)