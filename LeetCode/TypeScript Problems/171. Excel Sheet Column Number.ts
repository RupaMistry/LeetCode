function titleToNumber(columnTitle: string): number {
    let result = 0;

    // Scan through the characters from left to right
    for (let i = 0; i < columnTitle.length; i++) {
        // 1. Shift the existing accumulated total to the left by one Base-26 place value
        result *= 26;

        // 2. Get the ASCII value of the current character
        const charCode = columnTitle.charCodeAt(i);

        // 3. Map the character code to a 1-indexed scale (65 is 'A', so 65 - 64 = 1)
        const currentWeight = charCode - 64;

        // 4. Add the current positional weight into our totalizer
        result += currentWeight;
    }

    return result;
}