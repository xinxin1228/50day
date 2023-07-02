const panelElList = document.querySelectorAll('.panel')

panelElList.forEach(item =>
  item.addEventListener('click', () => {
    removeActiveClass()
    item.classList.add('active')
  })
)

function removeActiveClass() {
  panelElList.forEach(item => item.classList.remove('active'))
}