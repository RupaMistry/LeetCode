function countPrimes(n: number): number {
    if (n <= 2) return 0;

    // Create a boolean array initialized to true
    // isPrime[i] indicates whether i is a prime number
    const isPrime = new Uint8Array(n);
    isPrime.fill(1); // 1 represents true, 0 represents false

    isPrime[0] = 0;
    isPrime[1] = 0;

    // We only need to check up to Math.sqrt(n)
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i starting from i * i as false (0)
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    // Sum up all the prime markers
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}