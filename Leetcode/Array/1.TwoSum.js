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

const result = function TwoSums (array, num) {
  if(!array || array.length<=1){
    return null;
  }
  let a, b;
  array.forEach((n, i)=>{
      array.forEach((m, j=>{
        if((n != m) && (n + m) == num){
          return [i,j];
        } 
      });
  });
 return null;
}

var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - nums[i];
    if (map.hasOwnProperty(num2)) {
      return [map[num2], i];
    }
    map[num1]=i;
  }
  throw new Error("No solution found");
};