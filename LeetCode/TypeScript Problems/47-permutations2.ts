function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    const used = new Array(nums.length).fill(false);

    // 1. Sort to handle duplicates
    nums.sort((a, b) => a - b);

    function backtrack(path: number[]) {
        // Base case: we found a complete permutation
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip if the specific index is already used
            if (used[i]) continue;

            // Skip if current number is same as previous and previous wasn't used
            // This ensures we only use the first available instance of a duplicate 
            // to start a permutation branch at this level.
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }

            // Choose
            used[i] = true;
            path.push(nums[i]);

            // Explore
            backtrack(path);

            // Backtrack
            path.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return result;
}