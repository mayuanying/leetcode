var arr = [1, '+', 2, '*', 3, '/', '4', '-', 2]

function calc(arr) {
  const res = [arr[0]]
  
  for(let i = 1; i < arr.length; i++) {
    const char = arr[i]
    const last = res[res.length - 1]
  
    if (char === '*' || char === '/') {
      res[res.length - 1] += char
    } else if (typeof last === 'string' && (last.indexOf('*') >0 || last.indexOf('/')>0)) {
      res[res.length - 1] = eval(`${last}${char}`)
    } else {
      res.push(char)
    }
  }
  return eval(res.join(''))
}