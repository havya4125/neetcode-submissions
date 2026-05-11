class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const len = nums.length;
        let output = [];
        let maxElement = Number.MIN_SAFE_INTEGER;
        let left;
        let right;
        for (let i = 0; i <= nums.length - k; i++) {
            left = i;
            right = left + k - 1;
            maxElement = Number.MIN_SAFE_INTEGER;
            while (left <= right) {
                maxElement = Math.max(maxElement, nums[left]);
                left++;
            }
            output.push(maxElement);
        }
        return output;
    }
}

// cleaner brute force
// T.C -> O(n-k * k)
// S.C -> O(1)