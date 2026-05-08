class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // Brute force: check all substrings starting from each index,
    // track visited characters using ASCII array,
    // break as soon as a duplicate is found and update max length.
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        for (let i = 0; i < s.length; i++) {
            let arr = new Array(256).fill(0);
            for (let j = i; j < s.length; j++) {
                if (arr[s[j].charCodeAt(0)] === 1) break;
                let len = j - i + 1;
                maxLen = Math.max(len, maxLen);
                arr[s[j].charCodeAt(0)] = 1;
            }
        }
        return maxLen;
    }
}
