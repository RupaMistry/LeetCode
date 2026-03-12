function plusOne(digits: number[]): number[] {
    const n = digits.length;

    // Start from the last digit and move left
    for (let i = n - 1; i >= 0; i--) {
        // Increment current digit
        digits[i]++;

        // If the digit is less than 10, no carry is needed
        if (digits[i] < 10) {
            return digits;
        }

        // If it reaches 10, it must be 0, and we carry 1 to the left
        digits[i] = 0;
    }

    // If we are here, it means all digits were 9s (e.g., [9, 9, 9])
    // We need to add a 1 at the front
    return [1, ...digits];
}