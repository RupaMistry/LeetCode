function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = [];

    // Step 1: Sorting is non-negotiable here to handle duplicates
    nums.sort((a, b) => a - b);

    const backtrack = (start: number, currentPath: number[]) => {
        // Every path we take is a valid subset, so add a copy of it
        result.push([...currentPath]);

        for (let i = start; i < nums.length; i++) {
            // Step 2: The "Magic" skip condition
            // If this isn't the first element in our current loop 
            // and it's the same as the previous one, skip it!
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            // Standard backtracking: Choose, Explore, Un-choose
            currentPath.push(nums[i]);
            backtrack(i + 1, currentPath);
            currentPath.pop();
        }
    };

    backtrack(0, []);
    return result;
}