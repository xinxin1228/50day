const passEl = document.querySelector('#pass')
const submitEl = document.querySelector('.submit')
const copyEl = document.querySelector('.copy')
const settingsEl = document.querySelector('.settings')
const numberEl = document.querySelector('#number')

const SettingType = {
  UPPERCASE: 'uppercase', // 大写
  LOWERCASE: 'lowercase', // 小写
  NUMBERS: 'numbers', // 数字
  SYMBOLS: 'symbols', // 字符
}

const symbols = '!@#$%^&*(){}[]=<>/,.'

submitEl.addEventListener('click', () => {
  const setting = getSettingCheckbox()

  passEl.innerHTML = generatePass(numberEl.value, setting)
})
copyEl.addEventListener('click', () => {
  copy(passEl.textContent)
})

// 获取设置里面的多选项
const getSettingCheckbox = () => {
  const settings = []
  for (const item of settingsEl.children) {
    if (item.children[1].checked) {
      settings.push(item.children[1].id)
    }
  }

  return settings
}

// 生成密码
const generatePass = (len = 4, rules = []) => {
  let pass = ''
  const ruleLen = rules.length
  if (len < 1 || !ruleLen) return pass

  const average = (len / ruleLen) | 0
  const remainder = len % ruleLen
  rules = rules.map(item => ({
    type: item,
    num: average,
  }))
  for (let i = 0; i < remainder; i++) {
    rules[getRandom(0, remainder)].num++
  }

  rules.forEach(item => {
    pass += getCharacter(item.type, item.num)
  })

  pass = pass
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')

  return pass
}

/**
 * 获取字符
 * @param {string} type 类型
 * @param {number} num 长度
 * @returns
 */
function getCharacter(type, num) {
  let str = ''

  switch (type) {
    case SettingType.UPPERCASE:
      for (let i = 0; i < num; i++) {
        const random = getRandom(65, 26)
        str += String.fromCharCode(random)
      }
      break
    case SettingType.LOWERCASE:
      for (let i = 0; i < num; i++) {
        const random = getRandom(97, 26)
        str += String.fromCharCode(random)
      }
      break
    case SettingType.NUMBERS:
      for (let i = 0; i < num; i++) {
        const random = getRandom(0, 10)
        str += random
      }
      break
    case SettingType.SYMBOLS:
      for (let i = 0; i < num; i++) {
        const random = (Math.random() * symbols.length) | 0
        str += symbols[random]
      }
      break
  }

  return str
}

// 获取随机数
function getRandom(start, step) {
  return (Math.random() * step + start) | 0
}

// 复制内容到粘贴板
function copy(text) {
  if (!text) return
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('复制成功')
    })
    .catch(err => {
      alert('复制失败：', err)
    })
}
