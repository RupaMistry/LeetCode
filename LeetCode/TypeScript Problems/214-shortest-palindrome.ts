function shortestPalindrome(s: string): string {
    if (s.length <= 1) return s;

    const rev = s.split('').reverse().join('');
    // Combine with a separator to avoid overlapping across the boundary
    const combined = s + '#' + rev;

    // LPS (Longest Prefix Suffix) table
    const lps = new Array(combined.length).fill(0);

    // Build KMP failure function
    for (let i = 1; i < combined.length; i++) {
        let j = lps[i - 1];

        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }

        if (combined[i] === combined[j]) {
            j++;
        }
        lps[i] = j;
    }

    // The length of the longest palindromic prefix is at the last index of LPS
    const longestPalindromicPrefixLen = lps[combined.length - 1];

    // Take the remainder of the reversed string and add to the front
    const toPrepend = rev.substring(0, s.length - longestPalindromicPrefixLen);

    return toPrepend + s;
}