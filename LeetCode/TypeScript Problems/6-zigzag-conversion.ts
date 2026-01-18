function convert(s: string, numRows: number): string {
    // Edge case: If rows is 1 or string is shorter than rows, no change needed
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create an array of strings, one for each row
    const rows: string[] = new Array(Math.min(numRows, s.length)).fill("");

    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;

        // If we hit the top or bottom row, reverse direction
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row
        currentRow += goingDown ? 1 : -1;
    }

    // Combine all rows into a single string
    return rows.join("");
}