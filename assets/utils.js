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
