function uniquePaths(m: number, n: number): number {
    // 1. Create a 2D array (DP table)
    const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(1));

    // 2. Fill the table
    // We start from index 1 because the first row and column are already 1
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // 3. The bottom-right corner contains the total paths
    return dp[m - 1][n - 1];
}