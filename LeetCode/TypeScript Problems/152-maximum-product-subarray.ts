function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;

    // Initialize our tracking aggregates with the first element
    let globalMax = nums[0];
    let maxSoFar = nums[0];
    let minSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];

        // Critical Step: Cache 'maxSoFar' before overwriting it. 
        // 'minSoFar' needs the historical maxSoFar, not the freshly updated one.
        const tempMax = maxSoFar;

        // Calculate the new extremes at this checkpoint
        maxSoFar = Math.max(current, current * maxSoFar, current * minSoFar);
        minSoFar = Math.min(current, current * tempMax, current * minSoFar);

        // Update our all-time record holder
        globalMax = Math.max(globalMax, maxSoFar);
    }

    return globalMax;
}