/* You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

Input: A positive integer.

Output: The product of the digits as an integer. */


function digitsMultip(num) {
    num = num.toString();
    let result = 1;
    for(let n = 0; n<num.length; n++){
        if(num[n]!=0){
            result *=num[n] 
        }
    }
    return result;
}

console.log(digitsMultip(1209393));