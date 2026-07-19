function rangeBitwiseAnd(left: number, right: number): number {
    let shiftCount = 0;

    // Shift both numbers right until they meet at their common binary prefix
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shiftCount++;
    }

    // Restore the prefix back to its original position by appending 0s
    return left << shiftCount;
}