/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 * Follow up: If you have figured out the O(n) solution, try coding another solution using 
 * the divide and conquer approach, which is more subtle.
 * @param {number[]} nums
 * @return {number}
 */

 // Kadane's Algorithm 
var maxSubArray = function (nums) {
    let max_global = nums[0];
    let max_current = nums[0]; //subarray
    for (let i = 1; index < nums.length; i++) {
        if (max_current  < 0) {
            // if current max is less than 0, we start new subarray
            max_current  = nums[i];
        } else {
            max_current  += nums[i];
        }
        max_global = Math.max(max_global, max_current );
    }
    return max_global;
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let currentMax = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max);               
    }
    
    return max;
};