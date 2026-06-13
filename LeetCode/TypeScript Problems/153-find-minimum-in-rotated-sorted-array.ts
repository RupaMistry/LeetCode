function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    // Binary Search loop structure
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum must be strictly to the right of mid
            left = mid + 1;
        } else {
            // mid could be the minimum, or the minimum is to its left
            right = mid;
        }
    }

    // When left === right, the search space has converged to the minimum element
    return nums[left];
}