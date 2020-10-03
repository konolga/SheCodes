var climbStairs = function (n) {
    function climb(remain, cache) {

        //remain => number of stairs will remain after this step done
        if (remain < 0) {
            return 0;
        }
        if (remain === 0) {
            return 1;
        }
        if(cache[remain]){
            return cache[remain];
        }
        cache[remain] = climb(remain - 1, cache) + climb(remain - 2, cache);
        return cache[remain];
    }
    return climb(n, {});
};

/* 
always minus two or minus one: how many steps remain?
              3
        2            1 -> not necessary to check twice, use cache
    1      0      0    -1 
0     -1 

if -1 cannot perform this step, return 0
if 0 can perform, climb 1 stair, return 1
if 1 recursively check one and two stairs, save to cache


*/

//see also https://www.youtube.com/watch?v=uHAToNgAPaM
//https://leetcode.com/problems/climbing-stairs/solution/