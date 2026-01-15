function lengthOfLongestSubstring(s: string): number {
    let set = new Set<string>();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If the character at 'right' is already in the set, 
        // shrink the window from the left until the duplicate is removed
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add the current character and update the maximum length
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3