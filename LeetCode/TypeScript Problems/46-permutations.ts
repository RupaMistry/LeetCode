function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const used = new Set<number>();

    function backtrack(currentPath: number[]) {
        // Base Case: If the path length matches nums length, we found a permutation
        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return;
        }

        for (const num of nums) {
            // Skip if the number is already in the current permutation
            if (used.has(num)) continue;

            // 1. Choose the number
            currentPath.push(num);
            used.add(num);

            // 2. Explore deeper
            backtrack(currentPath);

            // 3. Backtrack (Undo the choice)
            currentPath.pop();
            used.delete(num);
        }
    }

    backtrack([]);
    return result;
}