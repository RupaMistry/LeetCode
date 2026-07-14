function hammingWeight(n: number): number {
    let count = 0;

    while (n !== 0) {
        // Clear the lowest set bit
        n = n & (n - 1);
        count++;
    }

    return count;
}