class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
    let right = height.length - 1;

    let leftMax = 0, rightMax = 0, total = 0;

    while(left < right) {

        if(height[left] <= height[right]){
            if(leftMax > height[left]){
                total+= leftMax - height[left];
            } else {
                leftMax = height[left];
            }
            left++;
        } else {
            if(rightMax > height[right]){
                total+= rightMax - height[right]
            } else {
                rightMax = height[right]
            }
            right--;
        }
    }
    return total;
    }
}
