function maxArea(height: number[]): number {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the current width
        const width = right - left;
        
        // The height of the water is limited by the shorter bar
        const currentHeight = Math.min(height[left], height[right]);
        
        // Update maxWater if the current area is larger
        const currentArea = width * currentHeight;
        maxWater = Math.max(maxWater, currentArea);

        // Move the pointer of the shorter bar inward
        // This is because keeping the shorter bar can never 
        // produce a larger area with a smaller width.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}