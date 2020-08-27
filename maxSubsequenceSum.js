/**
 * 最大子序列求和, 给的全是整数的数组, 求出这个数组中最大连续子序列的和
 * 例如：在数组[-2, 6, -1, 5, 4, -7, 2, 3]中，和最大的子序列是[6, -1, 5, 4]，它们的和是14…
 * @param {*} nums 
 */
function maxSubsequenceSum(nums) {
  let max = nums[0] // 最大求和值
  let tmp = nums[0] // 累加过程中, 求和的值

  for(let i = 0; i < nums.length; i++) {
    // 如果前面累加过程中的求和小于0, 则舍弃, 从i开始重新计数
    // 只要tmp>0, 则tmp + arr[i] 一定大于 arr[i]
    if (tmp < 0) {
      tmp = nums[i]
    } else {
      tmp += nums[i]
    }
    if (tmp > max) {
      max = tmp
    }
  }
  return max
}