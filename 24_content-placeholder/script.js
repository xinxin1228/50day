const cardEl = document.querySelector('.card')
const headerEl = document.querySelector('#header')
const titleEl = document.querySelector('#title')
const desEl = document.querySelector('#des')
const avatarEl = document.querySelector('#avatar')
const userNameEl = document.querySelector('#user-name')
const userDesEl = document.querySelector('#user-des')

const cardData = {
  cover:
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
  title: 'Lorem ipsum dolor sit amet',
  des: ' Lorem ipsum dolor sit amconsectetur adipisicing elit. Dolore perferendis',
  userInfo: {
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'John Doe',
    des: 'Oct 08, 2020',
  },
}

const displayContent = () => {
  headerEl.innerHTML = `<img src='${cardData.cover}' />`
  titleEl.innerHTML = `<h3>${cardData.title}</h3>`
  desEl.innerHTML = cardData.des
  avatarEl.innerHTML = `<img src='${cardData.userInfo.avatar}' />`
  userNameEl.innerHTML = cardData.userInfo.name
  userDesEl.innerHTML = cardData.userInfo.des

  removeSkeletonAnimation(cardEl)
}

setTimeout(displayContent, 3000)

// 去除骨架动画
function removeSkeletonAnimation(el) {
  const skeletonListEl = el.querySelectorAll('.skeleton-public')

  skeletonListEl.forEach(item => {
    item.className = item.className
      .split(' ')
      .filter(item => !item.startsWith('skeleton-'))
      .join(' ')
  })
}
