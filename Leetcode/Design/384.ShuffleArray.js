//Shuffle a set of numbers without duplicates.

var Solution = function (nums) {
    this.numsOriginal = nums;
};

Solution.prototype.reset = function () {
    return this.numsOriginal;
};

Solution.prototype.shuffle = function () {
    let numsShuffled = [...this.numsOriginal];
    for (let i = 0; i < numsShuffled.length; ++i) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = numsShuffled[i];
        numsShuffled[i] = numsShuffled[j];
        numsShuffled[j] = temp;

    }
    return numsShuffled;
};

//using Durstenfeld shuffle algorithm (optimized version of Fisher-Yates)
//Time complexity O(n)
//Space complexity O(n)