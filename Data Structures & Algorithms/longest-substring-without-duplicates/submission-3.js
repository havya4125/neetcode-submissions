class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let left = 0;
        let right = 0;

        const map = new Map();

        while (right < s.length) {
            if (map.has(s[right]) && left <= map.get(s[right])) {
                left = map.get(s[right]) + 1;
            }
            let len = right - left + 1;
            maxLen = Math.max(maxLen, len);
            map.set(s[right], right);
            right++;
        }
        return maxLen;
    }
}
// T.C -> O(n1) + O((n2 - n1) * n1 * n1)
// S.C -> O(n1) + O(n1) =~ O(1)