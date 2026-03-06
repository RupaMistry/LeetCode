function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let i = 0;
    const n = intervals.length;
    let [newStart, newEnd] = newInterval;

    // Phase 1: Add intervals that are completely to the left of newInterval
    while (i < n && intervals[i][1] < newStart) {
        result.push(intervals[i]);
        i++;
    }

    // Phase 2: Merge overlapping intervals with newInterval
    // An interval overlaps if its start is less than or equal to our current newEnd
    while (i < n && intervals[i][0] <= newEnd) {
        newStart = Math.min(newStart, intervals[i][0]);
        newEnd = Math.max(newEnd, intervals[i][1]);
        i++;
    }
    // Push the final merged version of newInterval
    result.push([newStart, newEnd]);

    // Phase 3: Add all remaining intervals that are to the right
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}