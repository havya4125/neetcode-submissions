class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    mapsEqual(m1, m2) {
        if (m1.size !== m2.size) return false;
        for (let [key, val] of m1) {
            if (m2.get(key) !== val) return false;
        }
        return true;
    }

    checkInclusion(s1, s2) {
        const s1Map = new Map();
        const s2Map = new Map();

        // pusing s1 elements into map
        for (let i = 0; i < s1.length; i++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
        }
        const windowSize = s1.length;

        for (let i = 0; i < s2.length - windowSize + 1; i++) {
            let left = i;
            let right = i + windowSize - 1;
            while (left <= right) {
                s2Map.set(s2[left], (s2Map.get(s2[left]) || 0) + 1);
                left++;
            }
            if (this.mapsEqual(s1Map, s2Map)) return true;
            s2Map.clear();
        }
        return false;
    }
}
// T.C -> O(n1) + O((n2 - n1) * n1 * n1)
// S.C -> O(n1) + O(n1) =~ O(1)
