const hEl = document.querySelector('.h')
const mEl = document.querySelector('.m')
const sEl = document.querySelector('.s')
const switchEl = document.querySelector('.switch')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const theme = localStorage.getItem('theme')

if (theme == 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const getTime = () => {
  const time = new Date()
  const h = conversionTime(time.getHours())
  const m = conversionTime(time.getMinutes())
  const s = time.getSeconds()
  const day = time.getDay()
  const month = time.getMonth()
  const date = time.getDate()

  console.log()

  if (s === 0) {
    sEl.style.transition = 'transform 0.4s'
    sEl.style.transform = `rotate(${180 + 6 * 60}deg)`
    setTimeout(() => {
      sEl.style.transition = 'transform 0s'
      sEl.style.transform = `rotate(${180}deg)`
    }, 0)
  } else {
    sEl.style.transition = 'transform 0.4s'
    sEl.style.transform = `rotate(${180 + 6 * s}deg)`
  }

  if (m === 0) {
    mEl.style.transition = 'transform 0.4s'
    mEl.style.transform = `rotate(${180 + 6 * 60 + 0.1 * s}deg)`
    setTimeout(() => {
      sEl.style.transition = 'transform 0s'
      sEl.style.transform = `rotate(${180}deg)`
    }, 0)
  } else {
    sEl.style.transition = 'transform 0.4s'
    mEl.style.transform = `rotate(${180 + 6 * m + 0.1 * s}deg)`
  }

  if (h === 0) {
    hEl.style.transition = 'transform 0.4s'
    hEl.style.transform = `rotate(${180 + 15 * 60 + 0.25 * m}deg)`
    setTimeout(() => {
      hEl.style.transition = 'transform 0s'
      hEl.style.transform = `rotate(${180}deg)`
    }, 0)
  } else {
    sEl.style.transition = 'transform 0.4s'
    hEl.style.transform = `rotate(${180 + 15 * h + 0.25 * m}deg)`
  }

  timeEl.innerHTML = `${h}:${m} ${h >= 12 ? 'PM' : 'AM'}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="day">${date}</span>`
}

setInterval(getTime, 1000)
getTime()

switchEl.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')

  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})

function conversionTime(num) {
  return num < 10 ? '0' + num : num
}
