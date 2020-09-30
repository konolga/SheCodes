
function insertionSort(array) {
    const length = array.length;
    moveNumber = (array, indexWhere, indexFrom) => {
        array.splice(indexWhere, 0, (array.splice(indexFrom, 1)[0]));
    }
    for (let i = 1; i < length; i++) {
        if (array[i] < array[0]) {
            moveNumber(array, 0, 1);
        } else {
            // only sort number smaller than number on the left of it. 
            //This is the part of insertion sort that makes it fast if 
            //the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        moveNumber(array, j, i);
                    }
                }
            }
        }
    }
}


let insertionSort = (inputArr) => {
    const length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

// Time complexity: O(N^2)
// Space complexity: O(1)

