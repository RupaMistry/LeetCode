function totalNQueens(n: number): number {
    let count = 0;

    // Track occupied columns and diagonals
    const cols = new Set<number>();
    const posDiagonals = new Set<number>(); // (row + col)
    const negDiagonals = new Set<number>(); // (row - col)

    function backtrack(row: number): void {
        // Base Case: If we've reached the end, we found a valid solution
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            const pDiag = row + col;
            const nDiag = row - col;

            // If the position is under attack, skip it
            if (cols.has(col) || posDiagonals.has(pDiag) || negDiagonals.has(nDiag)) {
                continue;
            }

            // 1. Place the queen (mark attack lines)
            cols.add(col);
            posDiagonals.add(pDiag);
            negDiagonals.add(nDiag);

            // 2. Move to the next row
            backtrack(row + 1);

            // 3. Backtrack (remove the queen to try other possibilities)
            cols.delete(col);
            posDiagonals.delete(pDiag);
            negDiagonals.delete(nDiag);
        }
    }

    backtrack(0);
    return count;
}