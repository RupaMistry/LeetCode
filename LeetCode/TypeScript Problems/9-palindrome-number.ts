function isPalindrome(x: number): boolean {
    // Special cases:
    // 1. Negative numbers are not palindromes (e.g., -121 vs 121-)
    // 2. Numbers ending in 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    // Reverse the second half of the number
    // We know we've reached the middle when x becomes smaller than reversedHalf
    while (x > reversedHalf) {
        reversedHalf = (reversedHalf * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    // For even-length numbers (e.g., 1221), x = 12 and reversedHalf = 12
    // For odd-length numbers (e.g., 121), x = 1 and reversedHalf = 12
    // In the odd case, we can remove the middle digit by reversedHalf / 10
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}