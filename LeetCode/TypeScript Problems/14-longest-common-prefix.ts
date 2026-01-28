function longestCommonPrefix(strs: string[]): string {
    // Edge case: If the array is empty, return an empty string
    if (strs.length === 0) return "";

    // Start by assuming the first string is the common prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);

            // If the prefix becomes empty, there's no common prefix at all
            if (prefix === "") return "";
        }
    }

    return prefix;
}