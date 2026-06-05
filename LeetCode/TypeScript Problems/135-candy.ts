function candy(ratings: number[]): number {
    const n = ratings.length;
    if (n <= 1) return n;

    // Start by giving every single child 1 candy
    const candies: number[] = new Array(n).fill(1);

    // Pass 1: Forward Pass (Look Left)
    // If you are rated higher than the person to your left, you get their count + 1
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Pass 2: Backward Pass (Look Right)
    // If you are rated higher than the person to your right, 
    // you must have MORE candy than them AND more than your left-side calculation gave you.
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Sum up the minimum required candies
    return candies.reduce((total, count) => total + count, 0);
}