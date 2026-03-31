function isScramble(s1: string, s2: string): boolean {
    const memo = new Map<string, boolean>();

    const solve = (str1: string, str2: string): boolean => {
        // Quick exit if they are identical
        if (str1 === str2) return true;
        
        // Use a unique key for the current pair of strings
        const key = `${str1}-${str2}`;
        if (memo.has(key)) return memo.get(key)!;

        // An easy optimization: if the sorted chars don't match, 
        // there's no way one is a scramble of the other.
        if (str1.length !== str2.length) return false;
        if ([...str1].sort().join('') !== [...str2].sort().join('')) {
            memo.set(key, false);
            return false;
        }

        const n = str1.length;

        // Try every possible split point
        for (let i = 1; i < n; i++) {
            // There are two scenarios for each split:
            
            // 1. We didn't swap the two halves
            // Check (s1_left, s2_left) AND (s1_right, s2_right)
            const noSwap = solve(str1.slice(0, i), str2.slice(0, i)) && 
                           solve(str1.slice(i), str2.slice(i));
            
            if (noSwap) {
                memo.set(key, true);
                return true;
            }

            // 2. We DID swap the two halves
            // Check (s1_left, s2_right) AND (s1_right, s2_left)
            const swapped = solve(str1.slice(0, i), str2.slice(n - i)) && 
                            solve(str1.slice(i), str2.slice(0, n - i));

            if (swapped) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    };

    return solve(s1, s2);
}