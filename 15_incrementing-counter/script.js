// 使用class
// 方法一： 使用 setInterval
// const numElList = document.querySelectorAll('.num')

// class IncrCounter {
//   constructor(el) {
//     this.el = el
//     this.init = 0
//     this.timer
//     this.step
//     this.maxCount
//   }

//   initFun() {
//     this.maxCount = Number(this.el?.textContent)
//     if (isNaN(this.maxCount)) throw '该元素的内容不是整数类型！'

//     this.step = (this.maxCount / 200) | 0
//     // this.timerInfo = setInterval(() => this.running(), 1)
//     this.timerInfo = setInterval(this.running.bind(this), 1)
//   }

//   running() {
//     this.init += this.step
//     this.init = Math.min(this.maxCount, this.init)
//     this.el.innerHTML = this.init

//     if (this.init >= this.maxCount) this.stop()
//   }

//   stop() {
//     clearInterval(this.timerInfo)
//   }
// }

// numElList.forEach(item => {
//   const incr = new IncrCounter(item)

//   incr.initFun()
// })

// 方法二： 使用setTimeout
// const numElList = document.querySelectorAll('.num')

// class IncrCounter {
//   constructor(el) {
//     this.el = el
//     this.init = 0
//     this.step
//     this.maxCount
//   }

//   initFun() {
//     this.maxCount = Number(this.el?.textContent)
//     if (isNaN(this.maxCount)) throw '该元素的内容不是整数类型！'
//     this.step = (this.maxCount / 200) | 0

//     this.running()
//   }

//   running() {
//     this.init += this.step
//     this.init = Math.min(this.init, this.maxCount)
//     this.el.innerHTML = this.init

//     // if (this.init < this.maxCount) setTimeout(this.running.bind(this), 1)
//     if (this.init < this.maxCount) setTimeout(() => this.running(), 1)
//   }
// }

// numElList.forEach(item => {
//   const incr = new IncrCounter(item)

//   incr.initFun()
// })

// 不使用class
// 使用 setInterval
// const numElList = document.querySelectorAll('.num')

// const incrCounter = el => {
//   const maxCount = el.innerHTML
//   if (isNaN(maxCount)) throw '该元素的内容不是整数类型！'

//   let init = 0
//   let timer
//   const speed = (maxCount / 200) | 0

//   const running = () => {
//     init += speed
//     init = Math.min(init, maxCount)
//     el.innerHTML = init

//     if (init > maxCount) clearInterval(timer)
//   }

//   timer = setInterval(running, 1)
// }

// numElList.forEach(item => {
//   incrCounter(item)
// })

// 使用 setTimeout
const numElList = document.querySelectorAll('.num')

const incrCounter = el => {
  const maxCount = el.innerHTML
  if (isNaN(maxCount)) throw '该元素的内容不是整数类型！'

  let init = 0
  const speed = (maxCount / 200) | 0

  const running = () => {
    init += speed
    init = Math.min(init, maxCount)
    el.innerHTML = init

    if (init < maxCount) setTimeout(running, 1)
  }

  running()
}

numElList.forEach(item => {
  incrCounter(item)
})
