class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const result = [];

        for(let str of strs) {
            let key = str.split('').sort().join('');
            
            if(!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }

        for(let val of map.values()) {
            result.push(val);
        }
        return result;
    }
}
