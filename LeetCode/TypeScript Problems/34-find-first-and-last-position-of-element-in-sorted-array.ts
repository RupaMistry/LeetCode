function searchRange(nums: number[], target: number): number[] {
    // Helper function to find a boundary (first or last)
    const findBoundary = (isFirst: boolean): number => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            // Using Math.floor(left + (right - left) / 2) to avoid overflow
            const mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] === target) {
                result = mid; // Found it, but let's see if we can do better
                if (isFirst) {
                    right = mid - 1; // Look left for the start
                } else {
                    left = mid + 1;  // Look right for the end
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    };

    // Run the search twice: once for the start, once for the end
    const firstPos = findBoundary(true);
    const lastPos = findBoundary(false);

    return [firstPos, lastPos];
}