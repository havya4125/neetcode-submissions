class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let maxFreq = 0;
        let maxLen = 0;

        const map = new Map();

        while (right < s.length) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            const len = right - left + 1;
            maxFreq = Math.max(maxFreq, map.get(s[right]));

            if (len - maxFreq <= k) {
                maxLen = Math.max(maxLen, len);
            } else {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            right++;
        }
        return maxLen;
    }
}
