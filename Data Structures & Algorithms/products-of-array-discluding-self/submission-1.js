class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let leftProducts = [];
        let rightProducts = [];

        // Calculating left products
        leftProducts[0] = 1;
        for(let i = 1; i < len; i++) {
            leftProducts[i] = leftProducts[i - 1] * nums[i-1];
        }

        // Calculating right Products
        rightProducts[len - 1] = 1;
        for(let i = len - 2; i >= 0; i--) {
            rightProducts[i] = rightProducts[i + 1] * nums[i+1];
        }

        // Pushing into output array
        let result = [];
        for(let i = 0 ; i < len; i++) {
            result.push(leftProducts[i] * rightProducts[i]);
        }
        return result;
        
    }
}
