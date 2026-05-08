class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    const len = prices.length;

    let min = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for(let i = 0 ; i < len; i++) {
        if(prices[i] > min) {
            maxProfit = Math.max(maxProfit, prices[i]- min);
        } else {
            min = prices[i];
        }
    }
    return maxProfit;
    }
}
