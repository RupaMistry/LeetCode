function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;

    // 1. Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result: number[][] = [];

    // 2. Initialize with the first interval
    let currentInterval = intervals[0];
    result.push(currentInterval);

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
        const currentEnd = currentInterval[1];
        const [nextStart, nextEnd] = nextInterval;

        // 3. Check for overlap
        if (nextStart <= currentEnd) {
            // Overlap found: merge by updating the end time
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            // No overlap: move to the next interval
            currentInterval = nextInterval;
            result.push(currentInterval);
        }
    }

    return result;
}