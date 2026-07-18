function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prev2 = 0; // Represents max profit two houses back
    let prev1 = 0; // Represents max profit one house back

    for (const money of nums) {
        // Decide: skip current house OR rob current house + profit from 2 houses ago
        const currentMax = Math.max(prev1, prev2 + money);

        // Shift pointers forward
        prev2 = prev1;
        prev1 = currentMax;
    }

    return prev1;
}