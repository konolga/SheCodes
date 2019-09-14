/**
 * Given a string, find the first non-repeating 
 * character in it and return it's index. 
 * If it doesn't exist, return -1.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    return s.indexOf(
            [...s].find(char=>{
                return s.indexOf(char)===s.lastIndexOf(char);
            })
    );
};

console.log(firstUniqChar("loveleetcode"));