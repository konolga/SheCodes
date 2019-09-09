/**
 * @param {number[]} nums
 * @return {number}
 */

 var removeDuplicates = function(nums) {
     var newAR = nums.filter((item, index, arr)=>{
       return arr.indexOf(item) == index;
        });
        console.log('filtered arr', newAR); ;
    nums.splice(0, nums.length,nums.filter((item, index)=>{
    nums.lastIndexOf(item) == index;
    }));
};

let arr = [1,1,2];
console.log('arr before', arr);
removeDuplicates(arr);
console.log('arr after', arr);