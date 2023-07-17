const searchEl = document.querySelector('#search')
const userInfoEl = document.querySelector('.user-info')

let userInfo = {}
const ENTER_KEY = 'Enter'
const API_BASE_URL = 'https://api.github.com/users/'

searchEl.addEventListener('keydown', e => {
  if (e.code === ENTER_KEY) {
    const val = e.target.value

    if (!val.trim()) return

    getUserInfo(val)
  }
})

// 获取用户信息
const getUserInfo = async user => {
  if (!user) return

  try {
    userInfoEl.innerHTML = '<h1>Loading...</h1>'
    userInfoEl.style.display = 'flex'
    const { data } = await axios.get(`${API_BASE_URL}${user}`)
    userInfo = data

    const { data: reposList } = await axios.get(
      `${API_BASE_URL}${user}/repos?sort=created`
    )

    updateDOM(user, data, reposList)
  } catch (error) {
    if (error.response.status === 404) {
      userInfoEl.innerHTML = '<h1>No profile with this username</h1>'
    } else {
      userInfoEl.innerHTML = '<h1> The server is abnormal.  </h1>'
    }
  }
}

// DOM渲染
const updateDOM = (user, userInfo = {}, reposList = []) => {
  userInfoEl.innerHTML = ''
  userInfoEl.style.display = 'flex'

  const avatarEl = document.createElement('div')
  const infoEl = document.createElement('div')
  avatarEl.className = 'avatar'
  infoEl.className = 'info'

  avatarEl.innerHTML = `
   <img src="${userInfo.avatar_url}"
    alt="${userInfo.name ?? user}" />
  `
  infoEl.innerHTML = `
    <h2 class="name">${userInfo.name ?? user}</h2>
    ${userInfo.bio ? `<div class="dio">${userInfo.bio}</div>` : ''}
    <div class="deed">
      <span>${userInfo.followers} Followers</span>
      <span>${userInfo.following} Folloing</span>
      <span>${userInfo.public_repos} Repos</span>
    </div>
    <div class="projects">
      ${reposList
        ?.slice(0, 5)
        .map(
          item =>
            `<a href='${item.html_url}'>${
              item.full_name.split(`${user}/`)[1]
            }</a>`
        )
        .join('')}
    </div>
  `

  userInfoEl.append(avatarEl, infoEl)
}
