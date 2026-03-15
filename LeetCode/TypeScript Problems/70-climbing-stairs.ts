function climbStairs(n: number): number {
    // Base cases
    if (n <= 2) return n;

    let first = 1;  // Ways to reach step 1
    let second = 2; // Ways to reach step 2

    for (let i = 3; i <= n; i++) {
        // The current step is the sum of the previous two
        const current = first + second;

        // Update variables for the next iteration
        first = second;
        second = current;
    }

    return second;
}