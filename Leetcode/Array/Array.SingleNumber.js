//136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    return nums.find(element=>{
       return nums.indexOf(element)===nums.lastIndexOf(element);
    })
};