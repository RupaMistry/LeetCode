function isInterleave(s1: string, s2: string, s3: string): boolean {
    // If the combined length doesn't match, it's impossible
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    const m = s1.length;
    const n = s2.length;

    // dp[i][j] means s1[0...i] and s2[0...j] can form s3[0...i+j]
    const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(false)
    );

    // Starting point
    dp[0][0] = true;

    // Fill the first column (using only s1)
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // Fill the first row (using only s2)
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Fill the rest of the grid
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Can we reach this spot from the top (via s1) 
            // OR from the left (via s2)?
            const fromS1 = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
            const fromS2 = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];

            dp[i][j] = fromS1 || fromS2;
        }
    }

    return dp[m][n];
}