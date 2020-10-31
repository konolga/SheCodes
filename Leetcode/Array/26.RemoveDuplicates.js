/**
 * Given a sorted array nums, remove the duplicates 
 * in-place such that each element appears only once
 *  and returns the new length.
 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 1; i < nums.length && nums.length >= 1;){
           nums[i]==nums[i-1] ? nums.splice(i-1, 1) : i++;
    }
        return nums.length;
};