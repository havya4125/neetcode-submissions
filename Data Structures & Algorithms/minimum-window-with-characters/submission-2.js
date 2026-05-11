class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let right = 0;
        let minLen = Number.MAX_SAFE_INTEGER;
        let count = 0;

        const freqMap = new Map();
        for (let i = 0; i < t.length; i++) {
            freqMap.set(t[i], (freqMap.get(t[i]) || 0) + 1);
        }

        let startIndex = -1;
        while (right < s.length) {
            if (freqMap.get(s[right]) > 0) {
                count = count + 1;
            }
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) - 1);

            while (count === t.length) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    startIndex = left;
                }
                freqMap.set(s[left], freqMap.get(s[left]) + 1);
                if (freqMap.get(s[left]) > 0) count = count - 1;
                left++;
            }
            right = right + 1;
        }

        return startIndex === -1 ? "" : s.slice(startIndex, startIndex + minLen);
    }
}

// t.c -> O(t.length) + O(s.len) + O(s.len)
// s.c -> O(52)
