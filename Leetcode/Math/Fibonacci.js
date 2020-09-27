// recursive
// (2^N) time complexity -> horrible
function fibonacci(m) {

    if (n < 2) return n;

    // or if (num <= 1) return 1;

    return fibonacci(m - 1) + fibonacci(m - 2);
}

// loop
// O(n) time complexity
function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

//we just store the value of e
//will avoid the computational time of that value for the next N times
//space complexity O(n)
//time complexity O(2N)

function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }