
  //Function to find the maximum profit and the number of jobs done.
  function JobScheduling(arr, n) {
 let jobs = [];
 for (let i = 0; i <= arr.length - 2; i = i + 3) {
   jobs.push({ id: arr[i], end: arr[i + 1], profit: arr[i + 2] });
 }
 jobs.sort((a, b) => a.end - b.end);
 let totalProfit = 0;
 let maxProfit = jobs[0]?.profit;
 let lastEnd = jobs[0]?.end;
 let count = 1;
 for (let j = 1; j < n; j++) {
   if (jobs[j]?.end === lastEnd) {
     //update maxProfit within same timeframe
     maxProfit = Math.max(maxProfit, jobs[j]?.profit);
   } else {
     // Update maxProfit for the new timeframe, considering the previous maximum
     totalProfit += maxProfit;
     maxProfit = jobs[j]?.profit; // Start with the new job's profit for the new timeframe
     lastEnd = jobs[j]?.end;
     count++;
   }
 }
 totalProfit += maxProfit;
 return [count, totalProfit];
  }

const res = JobScheduling([1 ,4, 20, 2, 1, 10, 3, 1, 40, 4, 1, 30], 4);
console.log("res:", res)