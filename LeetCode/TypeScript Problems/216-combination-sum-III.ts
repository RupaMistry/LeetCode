function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = [];
    const currentCombo: number[] = [];

    const backtrack = (start: number, remainSum: number): void => {
        // Success condition: exact target sum reached with exactly k elements
        if (remainSum === 0 && currentCombo.length === k) {
            result.push([...currentCombo]);
            return;
        }

        // Early pruning: sum exceeded or combination length exceeded
        if (remainSum < 0 || currentCombo.length >= k) {
            return;
        }

        for (let num = start; num <= 9; num++) {
            // Pruning: if current number is greater than remaining sum, higher numbers will also exceed
            if (num > remainSum) {
                break;
            }

            // 1. Choose
            currentCombo.push(num);

            // 2. Explore
            backtrack(num + 1, remainSum - num);

            // 3. Un-choose (backtrack)
            currentCombo.pop();
        }
    };

    backtrack(1, n);

    return result;
}