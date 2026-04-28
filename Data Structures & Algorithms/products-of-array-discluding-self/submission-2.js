class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let output = [];

        output[0] = 1;
        for(let i = 1; i < len; i++) {
            output[i] = output[i - 1]  * nums[i - 1];
        }

        let right = 1;
        for(let i = len - 1; i >=0; i--) {
            output[i] *= right;
            right *= nums[i];
        }
        return output;
    }
}
