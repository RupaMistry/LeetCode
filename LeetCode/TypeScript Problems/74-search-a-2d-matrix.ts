function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix || matrix.length === 0) return false;

    const m = matrix.length;
    const n = matrix[0].length;
    
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        // Standard binary search midpoint
        const mid = Math.floor(left + (right - left) / 2);
        
        // Map 1D 'mid' back to 2D coordinates [row][col]
        const row = Math.floor(mid / n);
        const col = mid % n;
        const midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}