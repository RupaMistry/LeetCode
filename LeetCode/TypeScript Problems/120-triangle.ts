function minimumTotal(triangle: number[][]): number {
    // Start from the second-to-last row and move to the top
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col < triangle[row].length; col++) {
            // Find the two reachable options in the row directly below
            const leftChild = triangle[row + 1][col];
            const rightChild = triangle[row + 1][col + 1];

            // Update the current cell with the minimum path sum to reach the bottom
            triangle[row][col] += Math.min(leftChild, rightChild);
        }
    }

    // The peak now holds the cumulative minimum path sum
    return triangle[0][0];
}