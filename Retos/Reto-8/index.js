
export default function maxProfit(prices) {
    let maxProfit = -1;
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const profit = prices[j] - prices[i];
        if (profit > maxProfit+1) {
          maxProfit = profit;
        }
      }
    }
    return maxProfit;
}