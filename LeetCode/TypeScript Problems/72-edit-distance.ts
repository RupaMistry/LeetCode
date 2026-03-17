function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;

    // Create a DP table with (m+1) rows and (n+1) columns
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // Fill base cases for empty word1
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Fill base cases for empty word2
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    // Fill the rest of the table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // Characters match, carry over the cost from the diagonals
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Characters don't match, choose the minimum of 3 operations
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1], // Replace
                    dp[i - 1][j],     // Delete
                    dp[i][j - 1]      // Insert
                ) + 1;
            }
        }
    }

    return dp[m][n];
}