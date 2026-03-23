function combine(n: number, k: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, current: number[]) {
        // Base case: we found a combination of size k
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        // Optimization: only loop while there are enough numbers left to reach k
        // i <= n - (k - current.length) + 1
        for (let i = start; i <= n; i++) {
            // 1. Choose
            current.push(i);

            // 2. Explore
            backtrack(i + 1, current);

            // 3. Backtrack
            current.pop();
        }
    }

    backtrack(1, []);
    return result;
}