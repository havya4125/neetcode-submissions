class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generateRow(row) {
        let res = 1;
        let result = [];
        result.push(res);
        for (let i = 0; i < row; i++) {
            res = res * (row - i);
            res = res / (i + 1);
            result.push(res);
        }
        return result;
    }
    generate(numRows) {
        let res = 1;
        let ans = [];
        ans.push([res]);
        for (let i = 1; i < numRows; i++) {
            ans.push(this.generateRow(i));
        }
        return ans;
    }
}
