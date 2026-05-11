class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const len = nums.length;
        let left = 0;

        let right = k - left;
        let output = [];
        let maxElement = Number.MIN_SAFE_INTEGER;
        for (let i = left; i < right; i++) {
            maxElement = Math.max(maxElement, nums[i]);
        }
        output.push(maxElement);

        for (let i = 1; i <= nums.length - k; i++) {
            right = k + i - 1;
            left = i;
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

//Total → O(k) + O((n-k) × k) which simplifies to O(n × k) - T.C
// O(1) - S.C