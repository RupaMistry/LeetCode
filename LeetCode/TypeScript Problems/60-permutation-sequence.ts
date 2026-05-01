function getPermutation(n: number, k: number): string {
    // 1. Pre-calculate factorials up to n
    const factorials: number[] = [1];
    for (let i = 1; i <= n; i++) {
        factorials[i] = factorials[i - 1] * i;
    }

    // 2. Create a list of available numbers [1, 2, 3, ..., n]
    const nums: number[] = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    // 3. Adjust k to be 0-indexed
    k--;

    let result = "";

    // 4. Calculate each position
    for (let i = n; i > 0; i--) {
        // How many permutations are there for the remaining (i-1) digits?
        const blockSize = factorials[i - 1];
        
        // Which block does k fall into?
        const digitIndex = Math.floor(k / blockSize);
        
        // Append the digit and remove it from our available pool
        result += nums[digitIndex];
        nums.splice(digitIndex, 1);

        // Update k to find the relative position inside the next block
        k %= blockSize;
    }

    return result;
}