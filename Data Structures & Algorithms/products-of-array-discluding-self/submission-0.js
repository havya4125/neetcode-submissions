class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let result = [];
        
        for(let i = 0 ; i < len; i++) {
            let temp = 1;
            for(let j = 0; j < len; j++) {
                if(i === j) continue;
                temp = temp * nums[j];
            }
            result.push(temp);
        }
        return result;
    }
}
