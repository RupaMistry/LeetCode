function reverse(x: number): number {
    const MAX_INT = 2147483647;      // 2^31 - 1
    const MIN_INT = -2147483648;     // -2^31

    let reversed = 0;

    while (x !== 0) {
        // Extract the last digit (handles negative numbers correctly in TS/JS)
        const pop = x % 10;

        // Update x by removing the last digit
        // Math.trunc is used instead of floor to handle negative numbers properly
        x = Math.trunc(x / 10);

        // Check for overflow before multiplying by 10
        if (reversed > MAX_INT / 10 || (reversed === MAX_INT / 10 && pop > 7)) {
            return 0;
        }
        if (reversed < MIN_INT / 10 || (reversed === MIN_INT / 10 && pop < -8)) {
            return 0;
        }

        reversed = (reversed * 10) + pop;
    }

    return reversed;
}