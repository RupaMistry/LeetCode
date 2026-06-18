function maximumGap(nums: number[]): number {
    const n = nums.length;
    if (n < 2) return 0;

    // 1. Find the global minimum and maximum values
    let globalMin = Infinity;
    let globalMax = -Infinity;
    for (const num of nums) {
        if (num < globalMin) globalMin = num;
        if (num > globalMax) globalMax = num;
    }

    // If all elements are identical, the maximum gap is 0
    if (globalMin === globalMax) return 0;

    // 2. Calculate the minimum possible max-gap size using the Pigeonhole Principle
    const bucketSize = Math.max(1, Math.floor((globalMax - globalMin) / (n - 1)));
    const bucketCount = Math.floor((globalMax - globalMin) / bucketSize) + 1;

    // Initialize buckets tracking only their localized min and max values
    const bucketMins: number[] = new Array(bucketCount).fill(Infinity);
    const bucketMaxes: number[] = new Array(bucketCount).fill(-Infinity);

    // 3. Map each number to its corresponding bucket slot
    for (const num of nums) {
        // Skip the global extremes to keep bucket boundaries mathematically clean
        if (num === globalMin || num === globalMax) continue;

        const bucketIndex = Math.floor((num - globalMin) / bucketSize);
        bucketMins[bucketIndex] = Math.min(bucketMins[bucketIndex], num);
        bucketMaxes[bucketIndex] = Math.max(bucketMaxes[bucketIndex], num);
    }

    // 4. Run a linear scan across buckets to find the maximum gap bridging them
    let maxGap = 0;
    let previousMax = globalMin; // The journey begins at our absolute minimum

    for (let i = 0; i < bucketCount; i++) {
        // If a bucket is empty (never updated), skip it entirely
        if (bucketMins[i] === Infinity) continue;

        // Gap is the current bucket's minimum minus the prior non-empty bucket's maximum
        maxGap = Math.max(maxGap, bucketMins[i] - previousMax);
        previousMax = bucketMaxes[i];
    }

    // Don't forget to check the final gap leading up to the global maximum
    maxGap = Math.max(maxGap, globalMax - previousMax);

    return maxGap;
}