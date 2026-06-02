class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const length = nums.length;
        let maxSum = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < length; i++) {
            let sum = nums[i];
            maxSum = Math.max(maxSum, sum);
            for (let j = i + 1; j < length; j++) {
                sum += nums[j];
                maxSum = Math.max(maxSum, sum);
            }
        }
        return maxSum;
    }
}

// T.C -> O(n * n)
// S.C -> O(1)