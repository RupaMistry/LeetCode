function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) return mid;

        // Determine which side is sorted
        if (nums[left] <= nums[mid]) {
            // Left side is sorted
            if (target >= nums[left] && target < nums[mid]) {
                // Target is within the sorted left range
                right = mid - 1;
            } else {
                // Target must be in the right side
                left = mid + 1;
            }
        } else {
            // Right side is sorted
            if (target > nums[mid] && target <= nums[right]) {
                // Target is within the sorted right range
                left = mid + 1;
            } else {
                // Target must be in the left side
                right = mid - 1;
            }
        }
    }

    return -1;
}