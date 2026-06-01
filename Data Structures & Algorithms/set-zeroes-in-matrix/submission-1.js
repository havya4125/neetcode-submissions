class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        let colArr = Array(n).fill(0);
        let rowArr = Array(m).fill(0);

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    colArr[j] = 1;
                    rowArr[i] = 1;
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (rowArr[i] === 1 || colArr[j] === 1) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}

// T.C -> O(2* nm)
// S.C -> O(n) + O(n)