![SortingCheatSheet](../../img/Sort.PNG)

For Javascript `Array.sort()` V8 engine uses:
Mozilla =>  `Merge` and `Quick` sort 
Chrome => `Tim` Sort

#1 - Sort 10 schools around your house by distance:
=> Nearly sorted: Insertion sort: space O(1)

#2 - eBay sorts listings by the current Bid amount:
=> A small number, integer: Radix or counting sort

#3 - Sort scores on ESPN
=> Lots of sports and scores: Quick sort: space O(logN)

#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
=> Not in-memory sorting so we are looking for time complexity O(logN): Merge Sort

#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
=> We adding new data to sorted data: Insertion Sort

#6 - Temperature Records for the past 50 years in Canada
=> if integer small range: radix or counting Sort
=> if decimal point: Quick sort

#7 - Large user name database needs to be sorted. Data is very random.
=> Quick sort to save memory space

#8 - You want to teach sorting
=> ;) Bubble sort


# The ideal sorting algorithm would have the following properties:
[✅] Stable: Equal keys aren’t reordered.
[✅] Operates in place, requiring O(1) extra space.
[✅] Worst-case O(n·lg(n)) key comparisons.
[✅] Worst-case O(n) swaps.
[✅] Adaptive: Speeds up to O(n) when data is nearly sorted or when there are few unique keys.


### Insertion Sort is best for small problem sizes or nearly-sorted data.
[✅] Stable
[✅] O(1) extra space
[❌] O(n²) comparisons and [❌] swaps
[✅] Adaptive: O(n) time when nearly sorted
[✅] Very low overhead”


### Selection Sort is best when swapping items is very costly
[❌] Not stable
[✅] O(1) extra space
[❌] Θ(n²) comparisons
[✅] Θ(n) swaps
[❌] Not adaptive


### Bubble Sort is similar to Insertion Sort with slightly more overhead
[✅] Stable
[✅] O(1) extra space
[❌] O(n²) comparisons and [❌] swaps
[✅] Adaptive: O(n) when nearly sorted


### Shell Sort has low overhead and may be good for small data sets
[❌] Not stable
[✅] O(1) extra space
[❌] O(n³/²) time […]
[✅] Adaptive: O(n·lg(n)) time when nearly sorted


### Merge Sort can be excellent if using O(n) extra space is OK
[✅] Stable
[❌] O(n) extra space for arrays […]
[❌] O(lg(n)) extra space for linked lists
[✅] O(n·lg(n)) time
[❌] Not adaptive
[✅] Does not require random access to data


### Heap Sort is simple, fast, and sorts in-place, but it is not stable
[❌] Not stable
[✅] O(1) extra space […]
[✅] O(n·lg(n)) time
[❌ ]Not really adaptive


### Quick Sort (2-way Partition) is a good general-purpose sort with low overhead
[❌] Not stable
[❌] O(lg(n)) extra space […]
[❌] O(n²) time [worst case], but typically [✅] O(n·lg(n)) time
[❌] Not adaptive


### Tim Sort - hybrid stable sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data
[✅] Worst-case performance O ( n log⁡ n )
[✅] Best-case performance O ( n )
[✅] Average performance O ( n log ⁡ n )
[❌] Worst-case space complexity O ( n )
[✅] [Stable]”


## which is best?
`Insertion` Sort is best for small problem sizes or nearly-sorted data.
`Selection` Sort is best when swapping items is very costly.
`Bubble` Sort is similar to Insertion Sort with slightly more overhead.
`Shell` Sort has low overhead and may be good for small data sets.
`Merge` Sort can be excellent if using O(n) extra space is OK.
`Heap` Sort is simple, fast, and sorts in-place, but it is not stable.
`Quick` Sort is a good general-purpose sort with low overhead.
`Quick3` is the preferred version of Quick Sort because it is adaptive.
`Dual Pivot Quick` Sort is a bit faster than the original Quick Sort.
Why is `Quick` Sort so popular? It’s on average a very fast algorithm.
`Tim` Sort is a blazing-fast, space-efficient, stable sorting algorithm.