//Bubble sort is a comparison​-based algorithm that compares each pair of elements 
//in an array and swaps them if they are out of order until the entire array is sorted. 
//For each element in the list, the algorithm compares every pair of elements.

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