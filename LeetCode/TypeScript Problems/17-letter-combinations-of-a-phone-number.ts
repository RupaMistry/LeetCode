function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const digitMap: Record<string, string[]> = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const result: string[] = [];

    function backtrack(index: number, currentString: string) {
        // Base case: we've used all digits
        if (currentString.length === digits.length) {
            result.push(currentString);
            return;
        }

        const currentDigit = digits[index];
        const letters = digitMap[currentDigit];

        for (const letter of letters) {
            // "Add" the letter and move to the next digit
            backtrack(index + 1, currentString + letter);
        }
    }

    backtrack(0, "");
    return result;
}