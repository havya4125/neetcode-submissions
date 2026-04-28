class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a,b) => a - b);
        let longestLen = 0;
        let temp = 0;
        for(let i = 1; i < nums.length ; i++) {
            if(nums[i] === nums[i - 1]) continue;
            if(nums[i] - nums[i - 1] === 1){
                temp ++;
            } else {
                temp = 0;
            }
            longestLen = Math.max(longestLen, temp);
        }
        return longestLen + 1;
    }
}
