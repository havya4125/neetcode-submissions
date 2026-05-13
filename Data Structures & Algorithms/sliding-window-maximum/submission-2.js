class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        const output = [];

        for (let i = 0; i < nums.length; i++) {
            if (deque.length !== 0 && deque[0] < i - k + 1) {
                deque.shift();
            }

            while (deque.length !== 0 && nums[i] >= nums[deque[deque.length - 1]]) {
                deque.pop();
            }

            deque.push(i);

            if (i >= k - 1) output.push(nums[deque[0]]);
        }
        return output;
    }
}

// T.C -> O(2N)
// S.C -> O(k) + o(n-k)