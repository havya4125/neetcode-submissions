class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const length = nums.length;
        let maxSum = Number.MIN_SAFE_INTEGER;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            sum += nums[i];
            maxSum = Math.max(sum, maxSum);

            if (sum < 0) sum = 0;
        }
        return maxSum;
    }
}

// This is solved using kadanes algorithm
// T.C -> O(n)
// S.C -> O(1)