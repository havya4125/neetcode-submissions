class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;
        nums.sort((a,b) => a - b);
        
        let result = [];

        for(let i = 0 ; i < len - 2; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let left = i + 1;
            let right = len - 1;
            let target = -1 * nums[i];

            while (left < right) {
                if(nums[left] + nums[right] === target) {
                    result.push([nums[i],nums[left],nums[right]]);
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (nums[left] + nums[right] > target) right--;
                else left++;
            }
        }

        return result;
    }
}
