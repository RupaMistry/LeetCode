function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;

    function backtrack(r: number, c: number, index: number): boolean {
        // Base case: found all characters
        if (index === word.length) return true;

        // Boundary and match check
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[index]) {
            return false;
        }

        // 1. Mark the cell as visited
        const temp = board[r][c];
        board[r][c] = '#';

        // 2. Explore 4 directions: Down, Up, Right, Left
        const found = backtrack(r + 1, c, index + 1) ||
            backtrack(r - 1, c, index + 1) ||
            backtrack(r, c + 1, index + 1) ||
            backtrack(r, c - 1, index + 1);

        // 3. Backtrack: Restore the original character
        board[r][c] = temp;

        return found;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Start DFS if the first character matches
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false;
}