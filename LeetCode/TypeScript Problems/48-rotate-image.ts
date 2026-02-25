/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // 1. Transpose the matrix
    // We only iterate over the upper triangle to avoid swapping elements twice
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap matrix[i][j] with matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // 2. Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}