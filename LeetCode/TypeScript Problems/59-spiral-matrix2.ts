function generateMatrix(n: number): number[][] {
    // 1. Initialize an empty n x n matrix
    const matrix: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

    let val = 1;
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;

    while (val <= n * n) {
        // Fill Top Row: move left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = val++;
        }
        top++;

        // Fill Right Column: move top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = val++;
        }
        right--;

        // Fill Bottom Row: move right to left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = val++;
        }
        bottom--;

        // Fill Left Column: move bottom to top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = val++;
        }
        left++;
    }

    return matrix;
}