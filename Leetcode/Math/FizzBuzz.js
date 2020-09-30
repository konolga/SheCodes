//Naive Approach
//Time Complexity: O(N)
//Space Complexity: O(1)

let fizzBuzz = function (n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let temp = "";
        temp += (i % 3) ? "" : "Fizz";
        temp += (i % 5) ? "" : "Buzz";
        temp = (!temp) ? i.toString() : temp;
        
        arr.push(temp);
    }
    return arr;
};


// using hash map: code is flexible now, we can add more conditions 
//to the hash map without adding multiple if...else conditions

//Time Complexity: O(N)
//Space Complexity: O(1)

let fizzBuzz = (n) => {

    let hashMap = new Map();
    let arr = [];

    hashMap.set(3, "Fizz");
    hashMap.set(5, "Buzz");

    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let key of hashMap.keys()) {
            if (i % key == 0) {
                //The Map object holds key-value pairs and remembers the original insertion order of the keys.
                //So 5 will be always checked after 3
                output += hashMap.get(key);
            }
        }
        if (output == "") {
            output = i.toString();
        }
        arr.push(output);
    }
    return arr;
};


// One line
let fizzBuzz = n => new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || ('' + i));