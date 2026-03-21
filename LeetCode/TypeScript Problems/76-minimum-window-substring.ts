function minWindow(s: string, t: string): string {

    // Frequency array for ASCII characters
    const map = new Int32Array(128);

    for (const char of t) map[char.charCodeAt(0)]++;

    let left = 0, right = 0, minLen = Infinity, start = 0;
    let count = t.length; // number of characters still needed

    while (right < s.length) {
        // 1. Expand: If we need s[right], decrement count
        if (map[s.charCodeAt(right++)]-- > 0) count--;

        // 2. Contract: While window is valid
        while (count === 0) {
            // Update the global minimum window
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }

            // Move left pointer: if we remove a required character, increment count
            if (map[s.charCodeAt(left++)]++ === 0) count++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}