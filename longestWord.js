/**
  * 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。
  * 若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。

  * 示例：
  * 输入： [“cat”,”banana”,”dog”,”nana”,”walk”,”walker”,”dogwalker”]
  * 输出： “dogwalker”
  * 解释： “dogwalker”可由”dog”和”walker”组成。

  * 提示：
  * 0 <= len(words) <= 200
  * 1 <= len(words[i]) <= 100

  * @param {string[]} words
  * @return {string}
*/
var longestWord = function(words) {
  const isComp = (word, arr) => {
    const len = word.length
    if (len <= 1) {
      return arr.includes(word)
    }
    for(let i = 1; i<= len; i++) {
      const left = word.substr(0, i)
      const right = word.substr(i, len - 1)

      if (arr.includes(left)) {
        if (!right) return true
        else if (isComp(right, arr)) return true
      }
    }
  }
  // 如果不考虑index 可以用下面这种方法
  // var maxLength = 0
  // var maxStr = ''
  // var maxIndex = words.length
  // words.forEach((word, i) => {
  //   if( isComp(word, words)) {
  //     if (word.length > maxLength && maxIndex > i) {
  //       maxLength = word.length
  //       maxStr = word
  //       maxIndex = i
  //     }
  //   }
  // })

  // return maxStr
  const filtered = words.filter((word, i) => {
    const cloneArr = [...words]
    cloneArr.splice(i, 1)
    return  isComp(word, cloneArr)
  })

  if (!filtered.length) return ''

  const indexObj = {}
  filtered.forEach((word, index) => indexObj[word] = index)
  const sorted = filtered.sort((a, b) => b.length - a.length)

  let result = ''
  sorted.forEach((word, i) => {
    const next = sorted[i + 1]
    const currIndex = indexObj[word]
    const nextIndex = indexObj[next]

    if (
      !next
      || word.length > next.length
      || currIndex >= nextIndex
    ) {
      result = result.length > word.length ? result : word
    }
  })

  return result
};