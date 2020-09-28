static void bubbleSort(int []arr, int len) 
{ 

    if (len == 1) return; 

    for (int i = 0; i < len - 1; i++) 
        if (arr[i] > arr[i + 1]) 
        { 
            // swap
            int temp = arr[i]; 
            arr[i] = arr[i + 1]; 
            arr[i + 1] = temp; 
        } 
  
    // Largest element is fixed, 
    // recur for remaining array 
    bubbleSort(arr, n - 1); 
} 