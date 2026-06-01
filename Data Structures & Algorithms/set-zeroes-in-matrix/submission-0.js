class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */

    markColumns(row, columns, matrix) {
        for (let i = 0; i < columns; i++) {
            if (matrix[row][i] !== 0) {
                matrix[row][i] = -1;
            }
        }
    }
    markRows(col, rows, matrix) {
        for (let i = 0; i < rows; i++) {
            if (matrix[i][col] !== 0) {
                matrix[i][col] = -1;
            }
        }
    }

    setZeroes(matrix) {
        const rows = matrix.length;
        const columns = matrix[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (matrix[i][j] === 0) {
                    this.markRows(j, rows, matrix);
                    this.markColumns(i, columns, matrix);
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (matrix[i][j] === -1) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}

// T.C -> O(n * m) * O(n+m) + O(n * m)