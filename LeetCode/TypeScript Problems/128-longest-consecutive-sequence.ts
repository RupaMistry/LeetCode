function longestConsecutive(nums: number[]): boolean | number {
    if (nums.length === 0) return 0;

    // Put everything in a set for O(1) lookups
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if this number is the absolute START of a sequence
        // If (num - 1) exists, then 'num' is just part of a larger streak elsewhere
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Expand the streak upwards
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update our record holder
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}