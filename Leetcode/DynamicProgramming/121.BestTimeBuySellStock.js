var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for(let price of prices){
        if(price < minPrice){
            minPrice = price;
        }
        else if(price - minPrice > maxProfit){
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
};

//Time complexity : O(n). Only a single pass is needed.
//Space complexity : O(1). Only two variables are used.