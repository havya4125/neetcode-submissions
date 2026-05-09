class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const len = s.length;
        let maxLen = 0;
        for (let i = 0; i < len; i++) {
            let hash = new Array(26).fill(0);
            let maxFreq = 0;
            for (let j = i; j < len; j++) {
                hash[s[j].charCodeAt(0) - "A".charCodeAt(0)]++;
                maxFreq = Math.max(maxFreq, hash[s[j].charCodeAt(0) - "A".charCodeAt(0)]);
                let changes = j - i + 1 - maxFreq;
                if (changes <= k) {
                    maxLen = Math.max(maxLen, j - i + 1);
                } else {
                    break;
                }
            }
        }
        return maxLen;
    }
}
