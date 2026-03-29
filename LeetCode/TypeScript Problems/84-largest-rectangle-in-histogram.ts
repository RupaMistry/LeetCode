function largestRectangleArea(heights: number[]): number {
    const stack: number[] = []; // Stores indices
    let maxArea = 0;

    // Add a 0 at the end to force the stack to clear at the end
    const extendedHeights = [...heights, 0];

    for (let i = 0; i < extendedHeights.length; i++) {
        // While the current bar is shorter than the bar at the stack top
        while (stack.length > 0 && extendedHeights[i] < extendedHeights[stack[stack.length - 1]]) {
            const height = extendedHeights[stack.pop()!];

            // If stack is empty, width is i. 
            // Otherwise, width is between i and the new top of the stack.
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}