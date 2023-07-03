// 解法一：从父级找子级
// const faqElList = document.querySelectorAll('.faq')
// const isAllEl = document.querySelector('#isAll')

// faqElList.forEach(item => {
//   item.querySelector('.faq-toggle').addEventListener('click', () => {
//     if (!isAllEl.checked) closeAll()
//     item.classList.toggle('active')
//   })
// })

// isAllEl.addEventListener('change', e => {
//   if (!e.target.checked) {
//     closeAll()
//     faqElList[0].classList.add('active')
//   }
// })

// // 全部关闭
// const closeAll = () =>
//   faqElList.forEach(item => item.classList.remove('active'))

// 解法二： 从子级找父级
const faqToggleElList = document.querySelectorAll('.faq-toggle')
const isAllEl = document.querySelector('#isAll')

faqToggleElList.forEach(item =>
  item.addEventListener('click', e => {
    if (!isAllEl.checked) closeAll()
    e.currentTarget.parentNode?.parentNode?.classList.toggle('active')
  })
)

isAllEl.addEventListener('change', e => {
  if (!e.target.checked) {
    closeAll()
    faqToggleElList[0].parentNode.parentNode?.classList.add('active')
  }
})

// 全部关闭
const closeAll = () =>
  faqToggleElList.forEach(item =>
    item.parentNode.parentNode?.classList.remove('active')
  )
