function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    // 1. Sort to handle duplicates and allow pruning
    candidates.sort((a, b) => a - b);

    function backtrack(remaining: number, start: number, path: number[]) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 2. Early Pruning: if the current number exceeds remaining, 
            // no need to check any further numbers (since array is sorted)
            if (candidates[i] > remaining) break;

            // 3. Skip duplicates at the same level of the recursion tree
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);

            // 4. Recurse with i + 1 (each number used once)
            backtrack(remaining - candidates[i], i + 1, path);

            path.pop();
        }
    }

    backtrack(target, 0, []);
    return result;
}