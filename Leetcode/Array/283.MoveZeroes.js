/**Given an array nums, write a function to move all 0's to the end of
 *  it while maintaining the relative order of the non-zero elements.
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let holder = 0; // will hold a place for non-zero found
    for (let pointer = 0; pointer < nums.length; pointer++) {
        //pointer is looking for non-zero
        if (nums[pointer] !== 0) {
            //swap
            let temp = nums[pointer];
            nums[pointer] = nums[holder];
            nums[holder] = temp;

            holder++;
        }

    }
}