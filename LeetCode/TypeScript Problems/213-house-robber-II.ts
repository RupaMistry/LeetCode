function rob(nums: number[]): number {
    // Edge case: No houses
    if (nums.length === 0) return 0;
    // Edge case: Only one house (cannot rob adjacent, so just rob this one)
    if (nums.length === 1) return nums[0];

    // Scenario 1: Include first house, exclude last house
    // Scenario 2: Exclude first house, include last house
    return Math.max(
        robLinear(nums.slice(0, nums.length - 1)),
        robLinear(nums.slice(1))
    );
}

/**
 * Helper to solve the standard linear version (House Robber I)
 */
function robLinear(houses: number[]): number {
    let prev2 = 0; // Max profit two houses ago
    let prev1 = 0; // Max profit one house ago

    for (const money of houses) {
        // Option 1: Skip current house (keep prev1)
        // Option 2: Rob current house (add current money to prev2)
        const currentMax = Math.max(prev1, prev2 + money);

        prev2 = prev1;
        prev1 = currentMax;
    }

    return prev1;
}