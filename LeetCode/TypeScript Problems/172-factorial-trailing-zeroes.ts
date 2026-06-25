function trailingZeroes(n: number): number {
    let count = 0;

    // Continuously divide n by 5 to harvest all prime factors of 5
    while (n >= 5) {
        // Find how many numbers in the current range are divisible by the current power of 5
        n = Math.floor(n / 5);

        // Add those factors to our tracking count
        count += n;
    }

    return count;
}