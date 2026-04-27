class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length;
        const map = new Map();

        for(let i = 0; i < len; i++) {
            const secNum = target - nums[i];

            if(map.has(secNum)){
                return [i, map.get(secNum)];
            }
            map.set(nums[i], i);
        }
    }
}
