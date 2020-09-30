//by @aneagoi

//Quicksort is a comparison-based algorithm that uses divide-and-conquer to sort an array.
// The algorithm picks a pivot element, A[q]A[q], and then rearranges the array into 
//two subarrays A[p...q-1]A[p…q−1], such that all elements are less than A[q]A[q], 
//and A[q+1...r]A[q+1...r], such that all elements are greater than or equal to A[q]A[q].

function quickSort(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
  }
     
  function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }

// Time complexity: O(N log N)
// Space complexity: O(log N)