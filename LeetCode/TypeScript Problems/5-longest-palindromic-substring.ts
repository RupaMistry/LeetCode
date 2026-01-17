function longestPalindrome(s: string): string {
    if (s.length < 1) return "";

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd length (center is the character at i)
        const len1 = expandAroundCenter(s, i, i);
        // Case 2: Even length (center is between i and i + 1)
        const len2 = expandAroundCenter(s, i, i + 1);

        const maxLen = Math.max(len1, len2);

        // If we found a longer palindrome, update our pointers
        if (maxLen > end - start) {
            // Calculate new start and end based on the center i
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Return the length of the palindrome found
    // Formula: (right - 1) - (left + 1) + 1 simplifies to right - left - 1
    return right - left - 1;
}