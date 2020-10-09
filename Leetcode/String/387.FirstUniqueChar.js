/**
 * Given a string, find the first non-repeating 
 * character in it and return it's index. 
 * If it doesn't exist, return -1.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    return s.indexOf(
        [...s].find(char => {
            return s.indexOf(char) === s.lastIndexOf(char);
        })
    );
};

//Linear Hash Map solution
var firstUniqChar = function (str) {
    let map = {};
    for (let char of str) {
        if (map[char]) {
            map[char] = 2;
        } else map[char] = 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) {
            return i
        }
    }

    return -1
}

//Time complexity : O(N) since we go through the string of length N two times.
//Space complexity : O(1) because English alphabet contains 26 letters.