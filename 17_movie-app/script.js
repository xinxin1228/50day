const moviesEl = document.querySelector('.movies')
const searchEl = document.querySelector('.search')

let moviesData = [] // 所有数据
let renderMoviesData = [] // 渲染页面上的数据
let searchText = ''

const getData = (async () => {
  const { data } = await axios.get('/17_movie-app/data.json')

  renderMoviesData = data
  moviesData = data
  updateDOM()
})()

const updateDOM = () => {
  const docEl = document.createDocumentFragment()
  moviesEl.innerHTML = ''

  renderMoviesData.forEach(item => {
    const movieEl = document.createElement('div')
    movieEl.className = 'movie'
    movieEl.innerHTML = `
      <div class="cover">
        <img
          src="${item.imgUrl}"
          alt="${item.title}"
        />
      </div>
      <div class="info">
        <h3 class="title">${keywordMark(item.title, searchText)}</h3>
        <div class="score" style="color: ${getScoreColor(item.score)}">${
      item.score
    }</div>
      </div>
    `

    docEl.append(movieEl)
  })
  moviesEl.append(docEl)
}

const getScoreColor = score => {
  if (score >= 8) {
    return 'green'
  } else if (score >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

const keywordMark = (txt, keyword = '') => {
  return txt?.replaceAll(keyword, `<Mark>${keyword}</Mark>`)
}

searchEl.addEventListener('input', e => {
  searchText = e.target.value

  if (!searchText?.trim()) {
    renderMoviesData = moviesData
  } else {
    renderMoviesData = moviesData.filter(item =>
      item.title?.includes(searchText)
    )
  }

  updateDOM()
})
