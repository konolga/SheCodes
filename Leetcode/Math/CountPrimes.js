

//The Sieve of Eratosthenes is one of the most efficient ways to find all prime numbers up to n.

const countPrimes = n => {

    //set Array with `true` entries only
    let arr = new Array(n).fill(true);

    //edge cases
    arr[0] = arr[1] = arr[n] = false;

    //mark all entries that can be divided by j as `false`
    for (let i = 2; i <= n; i++) {
        for (let j = i; i * j < n; j++) {
            arr[i * j] = false;
        }
    }

    //calculate `true` entries
    return arr.filter(entry => entry == true).length;
};

//Time Complexity: O(n log log n)
//Space Complexity: O(n)