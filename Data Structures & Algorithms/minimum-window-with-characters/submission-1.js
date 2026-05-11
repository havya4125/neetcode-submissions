class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const freqMap = new Map();

        for (let i = 0; i < t.length; i++) {
            freqMap.set(t[i], (freqMap.get(t[i]) || 0) + 1);
        }

        let minLength = Number.MAX_SAFE_INTEGER;
        let output = "";

        for (let i = 0; i < s.length; i++) {
            let temp = new Map(freqMap);
            let string = "";
            let count = 0;
            for (let j = i; j < s.length; j++) {
                string += s[j];

                if (temp.get(s[j]) > 0) {
                    count = count + 1;
                }
                temp.set(s[j], temp.get(s[j]) - 1);

                if (count === t.length) {
                    if (j - i + 1 < minLength) {
                        minLength = j - i + 1;
                        output = string;
                        break;
                    }
                }
            }
        }
        return output;
    }
}

// consider this as brute force solution