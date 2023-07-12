const btnEl = document.querySelector('button')

btnEl.addEventListener('click', e => {
  const x = e.pageX
  const y = e.pageY

  // 此种方法 连续点击多次只会有一次效果
  // const btnLeft = e.target.offsetLeft
  // const btnTop = e.target.offsetTop

  // 此种方法 连续点击多次会有多次效果
  const btnLeft = btnEl.offsetLeft
  const btnTop = btnEl.offsetTop

  const spanEl = document.createElement('span')
  spanEl.className = 'active'
  spanEl.style.left = x - btnLeft + 'px'
  spanEl.style.top = y - btnTop + 'px'
  btnEl.append(spanEl)

  setTimeout(() => spanEl.remove(), 500)
})
