class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    calculateSuffixMax (arr) {
    let suffixMax = [];
    const len = arr.length
    suffixMax[len - 1] = arr[len - 1];
    for(let i = len - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i+1], arr[i]);
    }
    return suffixMax;
    }

    trap(height) {
    const len = height.length;
    let totalUnits = 0;
    let leftMax = Number.MIN_SAFE_INTEGER;
    let rightMax;
    const suffixMax = this.calculateSuffixMax(height);
    for(let i = 0; i < len - 1; i++) {
        leftMax = Math.max(leftMax, height[i]);
        rightMax = suffixMax[i];
        if(height[i] < leftMax && height[i] < rightMax){
            totalUnits+= Math.min(leftMax, rightMax) - height[i];
        }
    }
    return totalUnits;
    }
}
