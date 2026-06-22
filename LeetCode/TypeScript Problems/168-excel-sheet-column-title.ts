function convertToTitle(columnNumber: number): string {
    const result: string[] = [];

    while (columnNumber > 0) {
        // 1. Shift down by 1 to convert Excel's 1-indexed logic into a clean 0-indexed base-26 system
        columnNumber--;

        // 2. Extract the current lowest alphanumeric digit
        const remainder = columnNumber % 26;

        // 3. String.fromCharCode(65) is 'A'. Adding the remainder maps 0->A, 1->B, ..., 25->Z
        const currentChar = String.fromCharCode(65 + remainder);
        result.push(currentChar);

        // 4. Step down to the next digit level
        columnNumber = Math.floor(columnNumber / 26);
    }

    // Because we collected characters from right to left (units place first), we reverse at the end
    return result.reverse().join('');
}