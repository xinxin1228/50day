const inputEl = document.querySelector('.input')
const listEl = document.querySelector('.list')

const todoList = JSON.parse(localStorage.getItem('todoList') || '[]')

inputEl.addEventListener('keydown', e => {
  if (e.code !== 'Enter') return
  const val = e.target.value

  if (!val?.trim()) return
  todoList.push({
    value: val,
    complete: false,
  })
  saveTodoList(todoList)
  render()
  e.target.value = ''
})

// 存入本地
const saveTodoList = todoList => {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}
const render = () => {
  listEl.innerHTML = ''

  const domEl = document.createDocumentFragment()
  todoList.forEach((item, index) => {
    const liEl = document.createElement('li')
    liEl.textContent = item.value
    item.complete && liEl.classList.add('complete')

    liEl.addEventListener('click', () => {
      liEl.classList.toggle('complete')
      todoList[index].complete = !todoList[index].complete

      saveTodoList(todoList)
    })
    liEl.addEventListener('contextmenu', e => {
      e.preventDefault()
      todoList.splice(index, 1)

      render()
      saveTodoList(todoList)
    })

    domEl.append(liEl)
  })

  listEl.append(domEl)
}

render()
