function trap(height: number[]): number {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        // We always process the side with the shorter current height
        if (height[left] < height[right]) {
            // Left side logic
            if (height[left] >= leftMax) {
                // We found a new peak, no water can be trapped here
                leftMax = height[left];
            } else {
                // The gap between the peak and current height is water
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            // Right side logic
            if (height[right] >= rightMax) {
                // New peak on the right
                rightMax = height[right];
            } else {
                // Water trapped by the right peak
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}