function isValidSudoku(board: string[][]): boolean {
    // Create arrays of sets to track numbers seen in rows, columns, and boxes
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            // Skip empty cells
            if (val === '.') continue;

            // Calculate the 3x3 box index
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check if value already exists in the current row, col, or box
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            // Add value to the respective sets
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIndex].add(val);
        }
    }

    return true;
}