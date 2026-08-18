function isPowerOfTwo(n: number): boolean {
    // 1. Must be positive
    // 2. n & (n - 1) removes the lowest set bit; if 0, only 1 bit existed
    return n > 0 && (n & (n - 1)) === 0;
}