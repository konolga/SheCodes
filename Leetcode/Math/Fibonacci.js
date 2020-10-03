https://leetcode.com/problems/fibonacci-number/solution/

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
//time complexity O(2^N)

function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


//Dynamic programming
//space complexity O(n)
//time complexity O(N)
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

function fibonacciMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}