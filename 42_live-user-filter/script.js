const inputEl = document.querySelector('#input')
const userListEl = document.querySelector('.user-list')
let userListItemEl = []
let userListData = []

const getData = async () => {
  const { data } = await axios.get('https://randomuser.me/api?results=50')

  userListData = data.results

  render()
}

getData()

inputEl.addEventListener('input', e => {
  const val = e.target.value

  userListItemEl.forEach(item => {
    if (item.innerText?.toUpperCase().includes(val.toUpperCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
})

function render() {
  userListEl.innerHTML = ''

  userListData.forEach(item => {
    const liEl = document.createElement('li')
    liEl.innerHTML = `
      <div class="avatar">
          <img src=${item.picture?.large} alt="" />
        </div>
        <div class="user">
          <h4 class="name">${item.name?.first} ${item.name?.last}</h4>
          <p class="des">${item.location.city}, ${item.location.country}</p>
        </div>
    `

    userListItemEl.push(liEl)
  })

  userListEl.append(...userListItemEl)
}
