const loadingEl = document.querySelector('.loading-text')
const markEl = document.querySelector('.mark')

// 加载时间
const loadingTime = 1000

function loading(loadingTime) {
  const val = parseInt(loadingEl.textContent)

  loadingEl.style.opacity = 1 - val / 100
  markEl.style.filter = `blur(${30 - val / (100 / 30)}px)`
  if (val < 100) {
    loadingEl.textContent = `${val + 1}%`
    setTimeout(loading, loadingTime / 100, loadingTime)
  }
}

loading(loadingTime)

