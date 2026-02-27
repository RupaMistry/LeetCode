function firstMissingPositive(nums: number[]): number {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // While the current number is in the valid range [1, n]
        // AND it is not in its correct position (nums[i] - 1)
        // AND the target position doesn't already have the correct number
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[i] !== nums[nums[i] - 1]
        ) {
            // Swap nums[i] with the element at its "home" index
            const targetIdx = nums[i] - 1;
            [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
        }
    }

    // Second pass: find the first index that doesn't match its value
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers 1 to n are present
    return n + 1;
}