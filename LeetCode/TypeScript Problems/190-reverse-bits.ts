function reverseBits(n: number): number {
    let result = 0;

    // Process all 32 bits explicitly
    for (let i = 0; i < 32; i++) {
        // 1. Shift the current result left by 1 bit to make space
        result = (result << 1);

        // 2. Extract the rightmost bit of n and add it to the result
        result = result | (n & 1);

        // 3. Unsigned right shift n to inspect the next bit in line
        n = n >>> 1;
    }

    // Convert back to an unsigned 32-bit integer in JS/TS engine space
    return result >>> 0;
}