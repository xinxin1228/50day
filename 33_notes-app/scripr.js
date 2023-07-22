const addEl = document.querySelector('#add')
const notesEl = document.querySelector('.notes')
const noteList = JSON.parse(localStorage.getItem('notes') || '[]')

const NoteType = {
  EDIT: 'edit',
  SAVE: 'save',
}

noteList.forEach(text => renderNote(NoteType.SAVE, text))
addEl.addEventListener('click', () => renderNote(NoteType.EDIT))

function handleSaveOrEdit(type = NoteType.SAVE, e) {
  const textEl = e.querySelector('.text')
  const textareaEl = e.querySelector('textarea')
  const saveEl = e.querySelector('.save')
  const editEl = e.querySelector('.edit')

  const isSave = type === NoteType.SAVE
  saveEl.style.display = isSave ? 'none' : 'inline-block'
  editEl.style.display = isSave ? 'inline-block' : 'none'
  textEl.style.display = isSave ? 'block' : 'none'
  textareaEl.style.display = isSave ? 'none' : 'block'
  textEl.innerHTML = textareaEl.value
}
function handleDelete(e) {
  if (!confirm('确认要删除吗?')) return

  e.remove()
  handleSaveLocalStorage()
}
function handleSaveLocalStorage() {
  const noteList = notesEl.querySelectorAll('textarea')

  localStorage.setItem(
    'notes',
    JSON.stringify(
      [...noteList].flatMap(item => (item.value ? [item.value] : []))
    )
  )
}
function renderNote(type = NoteType.SAVE, text = '') {
  const noteEl = document.createElement('div')
  noteEl.className = 'note'

  noteEl.innerHTML = `
      <div class="tools">
      <div class="cz">
          <i class="iconfont icon-bianji edit"></i>
          <i class="iconfont icon-baocun save"></i>
          <i class="iconfont icon-shanchu delete"></i>
        </div>
      </div>
      <div class="content">
        <textarea>${text}</textarea>
        <div class="text">${text}</div>
      </div>
    `

  const [editEl, saveEl, deleteEl, textareaEl] = noteEl.querySelectorAll(
    '.edit, .save, .delete, textarea'
  )

  saveEl.addEventListener(
    'click',
    handleSaveOrEdit.bind(null, NoteType.SAVE, noteEl)
  )
  editEl.addEventListener(
    'click',
    handleSaveOrEdit.bind(null, NoteType.EDIT, noteEl)
  )
  deleteEl.addEventListener('click', handleDelete.bind(null, noteEl))
  textareaEl.addEventListener('input', handleSaveLocalStorage)

  handleSaveOrEdit(type, noteEl)
  notesEl.append(noteEl)
}
