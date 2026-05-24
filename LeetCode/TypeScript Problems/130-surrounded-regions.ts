function solve(board: string[][]): void {
    if (board.length === 0 || board[0].length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    // Helper function to mark border-connected 'O's as 'E'
    function dfs(r: number, c: number): void {
        // Boundary check & verify if the cell is an 'O'
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
            return;
        }

        // Mark as escaped
        board[r][c] = 'E';

        // Check 4-directional neighbors
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    // 1. Run DFS for all 'O's on the left and right borders
    for (let r = 0; r < rows; r++) {
        if (board[r][0] === 'O') dfs(r, 0);
        if (board[r][cols - 1] === 'O') dfs(r, cols - 1);
    }

    // 2. Run DFS for all 'O's on the top and bottom borders
    for (let c = 0; c < cols; c++) {
        if (board[0][c] === 'O') dfs(0, c);
        if (board[rows - 1][c] === 'O') dfs(rows - 1, c);
    }

    // 3. Final pass: Flip trapped 'O's to 'X's, and 'E's back to 'O's
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] === 'E') {
                board[r][c] = 'O';
            }
        }
    }
}