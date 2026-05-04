class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const len = heights.length;

        let left = 0; 
        let right = len - 1;

        let area = Number.MIN_SAFE_INTEGER;

        while(left < right) {
            let length = right - left;
            let breadth;
            if(heights[left] < heights[right]){
                breadth = heights[left];
                left++;
            } else {
                breadth = heights[right];
                right--;
            }
            area = Math.max(area, length*breadth)
        }
        return area;
    }
}
