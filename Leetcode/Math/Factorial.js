//Iterative
function FactorialIterative(number) {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

//Recursive
function FactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * FactorialRecursive(number - 1)
}
