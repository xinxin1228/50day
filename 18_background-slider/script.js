const leftBtnEl = document.querySelector('.left')
const rightBtnEl = document.querySelector('.right')
const coverEl = document.querySelector('.cover')
const bodyEl = document.querySelector('body')

let currentIndex = 0
const imgUrl = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
]

const handleSwitchImage = (type = 'next') => {
  type === 'next' ? currentIndex++ : currentIndex--
  if (currentIndex > imgUrl.length - 1) {
    currentIndex = 0
  } else if (currentIndex < 0) {
    currentIndex = imgUrl.length - 1
  }

  updateDOM()
}

leftBtnEl.addEventListener('click', () => handleSwitchImage('prev'))
rightBtnEl.addEventListener('click', () => handleSwitchImage())

const updateDOM = () => {
  const src = imgUrl[currentIndex]

  bodyEl.style.background = `url(${src}) no-repeat center`
  coverEl.style.background = `url(${src}) no-repeat center`
}
updateDOM()
