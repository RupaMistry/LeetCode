function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // If the start or end is an obstacle, no paths exist
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    // dp array represents the number of ways to reach each column in the current row
    const dp = new Array(n).fill(0);

    // Initial position
    dp[0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                // Obstacle blocks all paths to this cell
                dp[j] = 0;
            } else if (j > 0) {
                // Paths to this cell = paths from above (already in dp[j]) 
                // + paths from the left (newly calculated in dp[j-1])
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n - 1];
}