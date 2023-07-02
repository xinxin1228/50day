const boxElList = document.querySelectorAll('.box')
let WHeight = document.documentElement.clientHeight

window.addEventListener('scroll', showBox, false)
window.addEventListener('resize', () => {
  WHeight = document.documentElement.clientHeight
  showBox()
}, false)

function showBox() {
  const scrollTop = document.documentElement.scrollTop

  boxElList.forEach((item) => {
    const itemScrollTop = item.offsetTop
    if (scrollTop + WHeight - 100 >= itemScrollTop) {
      item.classList.add('show')
    } else {
      item.classList.remove('show')
    }
  })
}

showBox()