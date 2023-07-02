// 常规版
// const btnElList = document.querySelectorAll('#buttons button')
// let currentAudio

// btnElList.forEach(item => {
//   item.addEventListener('click', () => {
//     document.querySelector(`#${currentAudio}`)?.pause()
//     currentAudio = item.textContent

//     document.querySelector(`#${currentAudio}`).play()
//     document.querySelector(`#${currentAudio}`).currentTime = 0;
//   }, false)
// })

// 动态添加音频与按钮
const audioList = [
  {
    name: 'applause',
    src: './sounds/applause.mp3'
  },
  {
    name: 'boo',
    src: './sounds/boo.mp3'
  },
  {
    name: 'gasp',
    src: './sounds/gasp.mp3'
  },
  {
    name: 'tada',
    src: './sounds/tada.mp3'
  },
  {
    name: 'victory',
    src: './sounds/victory.mp3'
  },
  {
    name: 'wrong',
    src: './sounds/wrong.mp3'
  },
]

const audiosEl = document.querySelector('#audios')
const buttonsEl = document.querySelector('#buttons')
let currentAudio

audiosEl.innerHTML = ''
buttonsEl.innerHTML = ''
const audioDoc = document.createDocumentFragment()
const buttonDoc = document.createDocumentFragment()

audioList.forEach(item => {
  const audioEl = document.createElement('audio')
  const btnEl = document.createElement('button')
  audioEl.src = item.src
  audioEl.id = item.name
  btnEl.textContent = item.name
  btnEl.addEventListener('click', () => {
    currentAudio?.pause()

    currentAudio = audioEl
    audioEl.play()
    audioEl.currentTime = 0
  })

  audioDoc.append(audioEl)
  buttonDoc.append(btnEl)
})

audiosEl.append(audioDoc)
buttonsEl.append(buttonDoc)
