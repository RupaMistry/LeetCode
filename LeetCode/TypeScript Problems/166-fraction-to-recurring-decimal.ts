function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) return "0";

    let result = "";

    // 1. Determine the sign of the fraction
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }

    // Work strictly with absolute values to keep the math clean
    let num = Math.abs(numerator);
    const den = Math.abs(denominator);

    // 2. Append the integer portion
    result += Math.floor(num / den).toString();

    // Calculate the initial remainder
    let remainder = num % den;

    // If there is no remainder, it's a perfect integer balance
    if (remainder === 0) return result;

    result += ".";

    // Map to store: Remainder -> The index in 'result' where its division digit starts
    const remainderMap = new Map<number, number>();

    // 3. Simulate long division for the fractional portion
    while (remainder !== 0) {
        // If the remainder has been seen before, we found a repeating cycle!
        if (remainderMap.has(remainder)) {
            const openParenthesisIndex = remainderMap.get(remainder)!;

            // Slice the string open, splice in the brackets, and return immediately
            return (
                result.slice(0, openParenthesisIndex) +
                "(" +
                result.slice(openParenthesisIndex) +
                ")"
            );
        }

        // Log this remainder alongside the current index position where its result will sit
        remainderMap.set(remainder, result.length);

        // Shift remainder up by a power of 10 (simulating bringing down a zero)
        remainder *= 10;

        // Append the next decimal digit
        result += Math.floor(remainder / den).toString();

        // Update the remainder for the next iteration
        remainder %= den;
    }

    return result;
}