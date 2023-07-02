const labelElList = document.querySelectorAll('label')
// 字幕跳动间隔时间
const speed = 50

labelElList.forEach(item => {
  const text = item.textContent.split('')

  item.innerHTML = text.map((text, index) => `<span style='transition-delay: ${speed * index}ms'>${text}</span>`).join('')
})