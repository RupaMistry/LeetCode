function minCut(s: string): number {
    const n = s.length;
    if (n <= 1) return 0;

    // cuts[i] will hold the min cuts needed for the substring s[0...i]
    const cuts: number[] = [];
    for (let i = 0; i < n; i++) {
        cuts[i] = i; // Worst case: every character is cut individually
    }

    // Helper to expand around a center and calculate minimal cuts
    function expand(left: number, right: number): void {
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (left === 0) {
                // If the palindrome starts at the beginning, 0 cuts are needed for s[0...right]
                cuts[right] = 0;
            } else {
                // Otherwise, it's (cuts needed before this palindrome) + 1 cut
                cuts[right] = Math.min(cuts[right], cuts[left - 1] + 1);
            }
            // Grow the palindrome outwards
            left--;
            right++;
        }
    }

    // Treat every index as a potential center of a palindrome
    for (let i = 0; i < n; i++) {
        expand(i, i);     // Odd-length palindromes (like "aba")
        expand(i, i + 1); // Even-length palindromes (like "baab")
    }

    return cuts[n - 1];
}