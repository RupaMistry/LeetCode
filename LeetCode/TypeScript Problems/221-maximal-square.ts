function maximalSquare(matrix: string[][]): number {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    // dp[c] stores the max square side length ending at column c of the previous row
    const dp = new Array<number>(cols + 1).fill(0);
    let maxSide = 0;
    let prevDiagonal = 0; // Tracks dp[r-1][c-1]

    for (let r = 0; r < rows; r++) {
        prevDiagonal = 0;
        for (let c = 1; c <= cols; c++) {
            const temp = dp[c]; // Save before overwriting to use as next diagonal

            if (matrix[r][c - 1] === '1') {
                dp[c] = Math.min(dp[c], dp[c - 1], prevDiagonal) + 1;
                maxSide = Math.max(maxSide, dp[c]);
            } else {
                dp[c] = 0;
            }

            prevDiagonal = temp;
        }
    }

    return maxSide * maxSide;
}