function singleNumber(nums: number[]): number {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        // Apply XOR operator to the running total
        result ^= nums[i];
    }

    return result;
}