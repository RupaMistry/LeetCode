function numDistinct(s: string, t: string): number {
    const sLen = s.length;
    const tLen = t.length;

    // Create a DP table filled with 0s
    // dp[i][j] = number of distinct subsequences of s[i...] that equal t[j...]
    const dp: number[][] = Array.from({ length: sLen + 1 }, () => 
        new Array(tLen + 1).fill(0)
    );

    // Base Case: If t is an empty string, there is exactly 1 subsequence (the empty one)
    for (let i = 0; i <= sLen; i++) {
        dp[i][tLen] = 1;
    }

    // Fill the table backwards
    for (let i = sLen - 1; i >= 0; i--) {
        for (let j = tLen - 1; j >= 0; j--) {
            // Option 1: We always have the option to skip the current character in s
            dp[i][j] = dp[i + 1][j];

            // Option 2: If characters match, we add the possibilities of using this match
            if (s[i] === t[j]) {
                dp[i][j] += dp[i + 1][j + 1];
            }
        }
    }

    return dp[0][0];
}