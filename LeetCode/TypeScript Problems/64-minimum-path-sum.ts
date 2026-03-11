function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    // dp array stores the min path sum to each column in the current row
    const dp = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                // Starting point
                dp[j] = grid[i][j];
            } else if (i === 0) {
                // First row: can only come from the left
                dp[j] = dp[j - 1] + grid[i][j];
            } else if (j === 0) {
                // First column: can only come from above
                // dp[j] currently holds the value from the row above
                dp[j] = dp[j] + grid[i][j];
            } else {
                // General case: min of (above, left) + current cell
                dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
            }
        }
    }

    return dp[n - 1];
}