/**
 * Given an array of integers, every element appears twice except for one. Find that single one.

 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var arr = nums[0];
    for(var i=1;i<nums.length;i++){
        arr = arr^nums[i];
    }
    return arr;
};