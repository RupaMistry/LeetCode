function containsNearbyAlmostDuplicate(
    nums: number[],
    indexDiff: number,
    valueDiff: number
): boolean {
    if (indexDiff <= 0 || valueDiff < 0) return false;

    const buckets = new Map<number, number>();
    const bucketWidth = valueDiff + 1;

    const getBucketId = (val: number): number => {
        return Math.floor(val / bucketWidth);
    };

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const bucketId = getBucketId(num);

        // 1. Same bucket collision: difference is strictly <= valueDiff
        if (buckets.has(bucketId)) {
            return true;
        }

        // 2. Check predecessor bucket
        if (buckets.has(bucketId - 1) && Math.abs(num - buckets.get(bucketId - 1)!) <= valueDiff) {
            return true;
        }

        // 3. Check successor bucket
        if (buckets.has(bucketId + 1) && Math.abs(num - buckets.get(bucketId + 1)!) <= valueDiff) {
            return true;
        }

        // Insert current number into its bucket
        buckets.set(bucketId, num);

        // Maintain sliding window: remove the element that fell outside indexDiff
        if (i >= indexDiff) {
            const oldBucketId = getBucketId(nums[i - indexDiff]);
            buckets.delete(oldBucketId);
        }
    }

    return false;
}   