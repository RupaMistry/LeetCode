function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0) return 0;

    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < cols; col++) {
            // Update the height of the histogram at this column
            if (matrix[row][col] === "1") {
                heights[col] += 1;
            } else {
                heights[col] = 0;
            }
        }
        // Calculate the max rectangle for the current row's histogram
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
}

// Reusing the Histogram logic from the previous problem
function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    const h = [...heights, 0]; // Sentinel to clear stack

    for (let i = 0; i < h.length; i++) {
        while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {
            const height = h[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}