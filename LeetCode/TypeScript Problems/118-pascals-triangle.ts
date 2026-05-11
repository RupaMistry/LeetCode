function generate(numRows: number): number[][] {
    const triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        // Create a new row filled with 1s. 
        // The length of the row is always (index + 1)
        const row: number[] = new Array(i + 1).fill(1);

        // We only need to calculate the "inner" numbers 
        // (everything between the first and last element)
        for (let j = 1; j < row.length - 1; j++) {
            const prevRow = triangle[i - 1];
            row[j] = prevRow[j - 1] + prevRow[j];
        }

        triangle.push(row);
    }

    return triangle;
}