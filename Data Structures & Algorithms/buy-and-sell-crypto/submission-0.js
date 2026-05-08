class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const len = prices.length;
        let profit = 0;

        for(let i = 0; i < len; i++) {
            const buyingPrice = prices[i];
            for(let j = i + 1; j < len; j++) {
                if(prices[j] > buyingPrice){
                    profit = Math.max(profit, prices[j] - buyingPrice)
                }
            }
        }
        return profit;
    }
}
