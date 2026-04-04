function numDecodings(s: string): number {
    if (!s || s[0] === '0') return 0;

    const n = s.length;
    // dp[i] will store the number of ways to decode s.substring(0, i)
    const dp = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 1; // Empty string
    dp[1] = 1; // First char is guaranteed not to be '0' due to the check above

    for (let i = 2; i <= n; i++) {
        // Look at the single digit (s[i-1])
        const oneDigit = parseInt(s.substring(i - 1, i));
        // Look at the double digit (s[i-2...i-1])
        const twoDigits = parseInt(s.substring(i - 2, i));

        // If the single digit is valid (1-9), add ways from dp[i-1]
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        // If the double digit is valid (10-26), add ways from dp[i-2]
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}