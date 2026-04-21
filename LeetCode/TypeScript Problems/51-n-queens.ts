function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[][] = Array.from({ length: n }, () => new Array(n).fill('.'));

    // Sets to track which columns and diagonals are occupied
    const cols = new Set<number>();
    const posDiag = new Set<number>(); // (row + col)
    const negDiag = new Set<number>(); // (row - col)

    const backtrack = (row: number) => {
        // Base Case: If we've placed queens in all rows, we found a solution
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check if this position is under attack
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }

            // 1. Place the queen
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row][col] = 'Q';

            // 2. Move to the next row
            backtrack(row + 1);

            // 3. Backtrack (Undo the placement)
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row][col] = '.';
        }
    };

    backtrack(0);
    return result;
}