/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    solve(board);
}

function solve(board: string[][]): boolean {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            // Find an empty cell
            if (board[r][c] === '.') {
                // Try every digit from 1 to 9
                for (let num = 1; num <= 9; num++) {
                    const char = num.toString();

                    if (isValid(board, r, c, char)) {
                        board[r][c] = char;

                        // Recursively try to solve the rest of the board
                        if (solve(board)) return true;

                        // If it didn't work, backtrack
                        board[r][c] = '.';
                    }
                }
                // If no number 1-9 works, this path is invalid
                return false;
            }
        }
    }
    // If no empty cells are left, the board is solved
    return true;
}

function isValid(board: string[][], row: number, col: number, char: string): boolean {
    for (let i = 0; i < 9; i++) {
        // Check row
        if (board[row][i] === char) return false;
        // Check column
        if (board[i][col] === char) return false;
        // Check 3x3 sub-box
        // Math.floor(row/3)*3 gives the top row of the box
        // i/3 and i%3 allow us to traverse the 3x3 box with one loop
        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + (i % 3);
        if (board[boxRow][boxCol] === char) return false;
    }
    return true;
}