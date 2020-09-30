//by @aneagoi

//Mergesort is a comparison-based algorithm that focuses on how to merge together
// two pre-sorted arrays such that the resulting array is also sorted.

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Time complexity: O(N log N)
// Space complexity: O(n)