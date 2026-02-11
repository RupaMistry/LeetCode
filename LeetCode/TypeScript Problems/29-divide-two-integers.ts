function divide(dividend: number, divisor: number): number {
    // 1. Handle Overflow Case
    const MAX_INT = 2147483647; // 2^31 - 1
    const MIN_INT = -2147483648; // -2^31

    if (dividend === MIN_INT && divisor === -1) return MAX_INT;

    // 2. Determine the sign of the result
    // If one is negative and the other isn't, the result is negative
    const isNegative = (dividend < 0) !== (divisor < 0);

    // 3. Work with absolute values (using Math.abs)
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let quotient = 0;

    // 4. Main Logic: Exponential search / Bit Shifting
    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor;
        let multiple = 1;

        // Double the divisor until it's larger than the dividend
        // (tempDivisor << 1) is equivalent to tempDivisor * 2
        while (absDividend >= (tempDivisor * 2) && (tempDivisor * 2) > 0) {
            tempDivisor *= 2;
            multiple *= 2;
        }

        // Subtract the largest found multiple and add to quotient
        absDividend -= tempDivisor;
        quotient += multiple;
    }

    return isNegative ? -quotient : quotient;
}