const cardsEl = document.querySelector('.cards')
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

;(async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getData(i)
  }
})()

/**
 * 请求数据
 * @param {number} id 序号
 */
async function getData(id) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  await renderDOM(data)
}

/**
 * 渲染DOM
 * @param {object} info card数据
 */
async function renderDOM(info = {}) {
  const type = info.types?.at?.(0)?.type?.name

  const cardEl = document.createElement('div')
  cardEl.className = 'card'
  cardEl.style.backgroundColor = colors[type || 'fire']
  cardEl.innerHTML = `
    <div class="cover">
      <img src=${info.sprites?.front_default} alt=${info.name} />
    </div>
    <span class="num">#${String(info.id).padStart(3, '0')}</span>
    <h3>${info.name}</h3>
    <h5>Types: ${type}</h5>
  `

  cardsEl.append(cardEl)
}
