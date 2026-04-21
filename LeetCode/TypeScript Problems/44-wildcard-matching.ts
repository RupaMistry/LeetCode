function isMatch(s: string, p: string): boolean {
    const sLen = s.length;
    const pLen = p.length;

    // dp[i][j] will be true if s[0..i-1] matches p[0..j-1]
    const dp: boolean[][] = Array.from({ length: sLen + 1 }, () =>
        new Array(pLen + 1).fill(false)
    );

    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Special case: pattern has '*' that can match empty string
    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        } else {
            // Once we hit a non-*, no subsequent characters can match an empty string
            break;
        }
    }

    // Fill the DP table
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                // Characters match or we have a single-char wildcard
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' matches empty (dp[i][j-1]) or matches one/more chars (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    return dp[sLen][pLen];
}