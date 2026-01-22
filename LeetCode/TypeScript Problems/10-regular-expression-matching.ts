function isMatch(s: string, p: string): boolean {
    const sLen = s.length;
    const pLen = p.length;

    // Initialize DP table with false 
    const dp: boolean[][] = Array.from({ length: sLen + 1 }, () =>
        new Array(pLen + 1).fill(false)
    );

    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Handle patterns that can match an empty string (e.g., "a*b*")
    for (let j = 2; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            const charS = s[i - 1];
            const charP = p[j - 1];

            if (charP === '.' || charP === charS) {
                // Characters match, inherit result from previous diagonal
                dp[i][j] = dp[i - 1][j - 1];
            } else if (charP === '*') {
                // Case 1: Match 0 of the preceding element
                // We look back 2 positions in the pattern
                dp[i][j] = dp[i][j - 2];

                // Case 2: Match 1 or more of the preceding element
                // The preceding pattern character must match the current string character
                const prevCharP = p[j - 2];
                if (prevCharP === '.' || prevCharP === charS) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[sLen][pLen];
}