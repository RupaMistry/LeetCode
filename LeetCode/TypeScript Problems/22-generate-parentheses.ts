/**
 * Generates all combinations of n pairs of well-formed parentheses.
 *  n - The number of pairs
 * returna an array of valid parentheses strings
 */
function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    /**
     * Helper function to build strings via backtracking
     * currentString - The string being built
     *  openCount - Number of '(' used
     *  closeCount - Number of ')' used
     */
    const backtrack = (currentString: string, openCount: number, closeCount: number): void => {
        // Base Case: If the string length reaches n * 2, it's complete
        if (currentString.length === n * 2) {
            result.push(currentString);
            return;
        }

        // Rule 1: Add '(' if we still have some left to use
        if (openCount < n) {
            backtrack(currentString + "(", openCount + 1, closeCount);
        }

        // Rule 2: Add ')' if it won't break the balance
        if (closeCount < openCount) {
            backtrack(currentString + ")", openCount, closeCount + 1);
        }
    };

    backtrack("", 0, 0);
    return result;
}
 