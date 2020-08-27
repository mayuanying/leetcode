/**
 * 给定一个整数数组, 每个数组就说一个木头的长度, 现在要买n块木头(等长), 已知长木头可以砍成短木头
 * 问: 这等长的n块木头, 最大长度是多少
 * 例: 给定[3, 4, 24, 16, 9, 13], 买4块木头, 最终得出最大长度为12
 * 
 * @param {*} n 要买的木头数量
 * @param {*} array 给定的整数数组
 * @returns 返回可买的最大木头长度
 */
function getMaxLength(n, array){
  const arr = array.sort((a, b) => a - b).slice(-n)
  let maxLen = arr[0]

  for(let i = maxLen + 1; i <= arr[arr.length - 1]; i++) {
    const count = arr
      .map(num => Math.floor(num / i))
      .reduce((prev, curr) => prev + curr, 0)

    if (count >= n) {
      maxLen = i
    } else {
      break
    }
  }
  return maxLen
} 
