class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const columns = Array.from( {length : 9}, () => new Set());
        const boxes = Array.from( {length: 9}, () => new Set());

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                // skip empty cells
                if(board[i][j] === '.') continue;

                const num = board[i][j];

                // find which box this cell belongs to
                const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);

                // if number already seen in same row, col or box → invalid
                if(rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) return false;

                // mark number as seen in row, col and box
                rows[i].add(num);
                columns[j].add(num);
                boxes[boxIndex].add(num)
            }
        }
        return true;
    }
}
