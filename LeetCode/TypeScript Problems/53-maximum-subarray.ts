function maxSubArray(nums: number[]): number {
    // Initialize currentSum and maxGlobal with the first element
    let currentSum = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide: Should we start a new subarray here or keep adding to the existing one?
        // currentSum = max(current_element, current_sum + current_element)
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the global maximum if the current subarray sum is larger
        if (currentSum > maxGlobal) {
            maxGlobal = currentSum;
        }
    }

    return maxGlobal