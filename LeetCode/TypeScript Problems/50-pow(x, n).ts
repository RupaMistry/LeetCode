function myPow(x: number, n: number): number {
    // Handle the negative exponent case
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }

    let result = 1;
    let currentProduct = x;

    // Iterate through the bits of N
    while (N > 0) {
        // If the current bit is 1 (N is odd)
        if (N % 2 === 1) {
            result *= currentProduct;
        }

        // Square the base for the next bit
        currentProduct *= currentProduct;

        // Use Math.floor for integer division (or bitwise shift for large N)
        N = Math.floor(N / 2);
    }

    return result;
}