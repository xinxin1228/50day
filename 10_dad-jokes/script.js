const btnEl = document.querySelector('.btn')
const jokeEl = document.querySelector('.joke')

const getData = async () => {
  jokeEl.textContent = '数据加载中...'
  const { data } = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    },

  })

  jokeEl.textContent = data.joke
}
getData()

btnEl.addEventListener('click', getData, false)


