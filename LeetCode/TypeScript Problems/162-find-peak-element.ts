function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    // Binary search across the mountain slopes
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        // Compare the middle element to its right neighbor to detect the local trend
        if (nums[mid] < nums[mid + 1]) {
            // We are climbing uphill to the right. A peak is guaranteed to exist on this side.
            left = mid + 1;
        } else {
            // We are going downhill, meaning 'mid' itself could be a peak, or one lies to the left.
            right = mid;
        }
    }

    // When left === right, the search window has closed directly on a valid peak index
    return left;
}