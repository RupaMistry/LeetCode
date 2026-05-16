function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // 1. Move left pointer until it hits an alphanumeric character
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // 2. Move right pointer until it hits an alphanumeric character
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // 3. Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // 4. Move both pointers inward
        left++;
        right--;
    }

    return true;
}

// Helper function: A "human-readable" check for letters and numbers
function isAlphaNumeric(char: string): boolean {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9');
}