/**Given an array of integers, find if the array contains any duplicates.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};
