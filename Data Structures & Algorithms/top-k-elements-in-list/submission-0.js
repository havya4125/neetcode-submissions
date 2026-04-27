class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const len = nums.length;
        const map = new Map();

        for(let i = 0; i < len; i++) {
            map.set(nums[i], (map.get( nums[i]) || 0 ) + 1);
        }
        
        const iterator = [...map.entries()];
        iterator.sort((a,b) => b[1] - a[1]);
        let result = [];
        for(let i = 0; i < k; i++) {
            result.push(iterator[i][0]);
        }
        return result;
    }
}
