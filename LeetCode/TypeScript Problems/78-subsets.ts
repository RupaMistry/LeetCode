function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, path: number[]): void {
        // Add a copy of the current path to the result
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            // 1. Choose the element
            path.push(nums[i]);

            // 2. Explore further with the next elements
            backtrack(i + 1, path);

            // 3. Backtrack: Remove the element to try the next one
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
}