/**
 * 防抖
 * @param {Function} fun 目标函数
 * @param {Number} time 防抖时长
 * @param {Boolean} immed 首次是否立即执行
 * @returns
 */
export function shakeFun(fun, time = 300, immed = true) {
  let immediately = false // 是否立即执行
  let timer

  return function (...rest) {
    clearTimeout(timer)
    if (immed && !immediately) {
      fun.apply(this, rest)
      immediately = true
    } else {
      timer = setTimeout(() => {
        fun.apply(this, rest)
        immediately = false
      }, time)
    }
  }
}

/**
 * 节流
 * @param {Function} target 目标函数
 * @param {Number} timer 节流时长
 * @returns
 */
export function throttle(target, timer = 2000) {
  let time = 0
  return function (...rest) {
    const now = Date.now()

    if (now - time > timer) {
      target.apply(this, rest)
      time = now
    }
  }
}
