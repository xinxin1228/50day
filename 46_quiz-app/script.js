const submitEl = document.querySelector('.quiz-submit')
const contentEl = document.querySelector('.quiz-content')
const inputListEl = [...document.querySelectorAll('.quiz-content input')]

const questionList = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
]
const answerList = []
let currentStep = 0

function render() {
  const { question, a, b, c, d } = questionList[currentStep]

  contentEl.querySelector('.question').innerHTML = `<h2>${question}</h2>`
  contentEl.querySelector('#a_txt').innerText = a
  contentEl.querySelector('#b_txt').innerText = b
  contentEl.querySelector('#c_txt').innerText = c
  contentEl.querySelector('#d_txt').innerText = d
}
function end() {
  let correct1 = 0
  questionList.forEach((_, index) => {
    if (questionList[index].correct === answerList[index]) correct1++
  })
  const correct = questionList.reduce(
    (prev, next, index) => prev + (next.correct === answerList[index] ? 1 : 0),
    0
  )

  contentEl.innerHTML = `You answered ${correct}/${questionList.length} questions correctly`
  submitEl.innerHTML = 'Reload'
}

render()

submitEl.addEventListener('click', () => {
  const answerEl = inputListEl.find(item => item.checked)
  if (submitEl.innerHTML === 'Submit') {
    if (!answerEl?.id) return

    answerList.push(answerEl.id)
    if (currentStep >= questionList.length - 1) return end()

    currentStep++
  } else {
    location.reload()
  }

  answerEl.checked = false
  render()
})
