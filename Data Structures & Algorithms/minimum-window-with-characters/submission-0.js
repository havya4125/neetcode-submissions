class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    checkMapValues (map) {
    for(let value of map.values()) {
        if(value > 0) return false;
    }
    return true;
}
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
            for (let j = i; j < s.length; j++) {
                string += s[j];

                if (temp.has(s[j])) {
                    temp.set(s[j], temp.get(s[j]) - 1);
                }

                if (this.checkMapValues(temp)) {
                    if (minLength > string.length) {
                        minLength = string.length;
                        output = string;
                    }
                    break;
                }
            }
        }
        return output;
    }
}

/**
T.C → O(m² × n)

Building freqMap → O(n)
Outer loop → O(m) times

Copy freqMap to temp → O(n)
Inner loop → O(m)
checkMapValues → O(n) each call



Total → O(n) + O(m × (n + m × n))
Simplifies to O(m² × n)

S.C → O(m + n)

freqMap → O(n)
temp → O(n) (only one exists at a time)
string → O(m)

Total → O(m + n)
**/
