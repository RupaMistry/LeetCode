function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // 1. Check if first row/column have zeros
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) firstRowHasZero = true;
    }
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstColHasZero = true;
    }

    // 2. Use first row and column as markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 3. Set zeros based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 4. Finally, handle the first row and column
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) matrix[0][j] = 0;
    }
    if (firstColHasZero) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0;
    }
}