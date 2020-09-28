/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
};

//recursive

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//Time complexity : O(N) time to perform N/2N/2 swaps.
//Space complexity : O(N) to keep the recursion stack.

var reverseString = function(s) {
    const reverse = function (string, start, end){
        
    if(start >= end) return;
        
    let temp = string[start];
    string[start++] = string[end];
    string[end--] = temp;
        
    return reverse(string, start, end); 
    }
    
    reverse(s, 0, s.length-1);
};
