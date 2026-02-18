function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(remaining: number, start: number, path: number[]) {
        // Base Case: Target reached
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        // Base Case: Exceeded target
        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 1. Choose the number
            path.push(candidates[i]);

            // 2. Explore: Note we pass 'i' as the start index, NOT 'i + 1'
            // because we can reuse the same element.
            backtrack(remaining - candidates[i], i, path);

            // 3. Backtrack: Remove the number to try other options
            path.pop();
        }
    }

    backtrack(target, 0, []);
    return result;
}