/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (50.43%)
 * Likes:    1205
 * Dislikes: 0
 * Total Accepted:    272.6K
 * Total Submissions: 540.6K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const resMap = new Map()
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2

  let res, n1 = 1, n2 = 2
  for(let i = 3; i <= n; i++) {
      res = n1 + n2
      n1 = n2
      n2 = res
  }
  return res
  // 下面是递归的写法, 考虑到数据重复计算的问题, 增加了一个map做缓存
  // if (n === 1) return 1
  // if (n === 2) return 2

  // if (resMap.has(n)) {
  //   return resMap.get(n)
  // }

  // const result = climbStairs(n - 1) + climbStairs(n - 2)
  // resMap.set(n, result)
  // return result
};
// @lc code=end

