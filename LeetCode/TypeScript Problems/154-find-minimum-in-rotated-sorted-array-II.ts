function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum must be strictly to the right of mid
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // The minimum could be at mid, or to its left
            right = mid;
        } else {
            // Deadlock: nums[mid] === nums[right]
            // We cannot tell which side is sorted. Shrink the window by 1.
            right--;
        }
    }

    // When left === right, the search space has converged directly onto the minimum element
    return nums[left];
}