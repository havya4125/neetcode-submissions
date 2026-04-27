class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const len = nums.length;
        const map = new Map();
        for(let i = 0; i < len; i++) {
            if(map.has(nums[i])){
                return true;
            }
            map.set(nums[i], 0);
        }
        return false;
    }
}
