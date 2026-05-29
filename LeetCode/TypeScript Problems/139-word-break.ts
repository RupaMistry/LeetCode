function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict);
    const n = s.length;

    // dp[i] represents whether the substring s[0...i] can be segmented
    const dp: boolean[] = new Array(n + 1).fill(false);

    // Base case: an empty prefix is technically a valid segmentation point
    dp[0] = true;

    // Scan forward through every prefix length
    for (let i = 1; i <= n; i++) {
        // Scan backward to find a valid historical checkpoint
        for (let j = 0; j < i; j++) {
            // If the prefix up to 'j' is valid, check if the remaining chunk is a word
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break; // Found a valid breakdown for length 'i', skip the rest
            }
        }
    }

    return dp[n];
}