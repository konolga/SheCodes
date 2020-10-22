/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = [];
    nums.forEach(n => map.push(target - n));
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        if (map.indexOf(temp) !== -1 && map.indexOf(temp) !== i) {
            return [map.indexOf(temp), i];
        }
    }

};