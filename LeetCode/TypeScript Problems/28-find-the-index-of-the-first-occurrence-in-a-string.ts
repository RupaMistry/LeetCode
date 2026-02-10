function strStr(haystack: string, needle: string): number {
    const hLen = haystack.length;
    const nLen = needle.length;

    // If needle is longer than haystack, it can't be a match
    if (nLen > hLen) return -1;

    // Iterate through the haystack
    // We only need to go up to (hLen - nLen) because after that,
    // there aren't enough characters left to match the needle.
    for (let i = 0; i <= hLen - nLen; i++) {
        // Check if the substring starting at 'i' matches 'needle'
        if (haystack.substring(i, i + nLen) === needle) {
            return i;
        }
    }

    return -1;
}