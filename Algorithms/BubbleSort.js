function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //Swap the numbers
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Time complexity: O(N^2)
// Space complexity: O(1)