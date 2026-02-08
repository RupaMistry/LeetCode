function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    // 'k' tracks the index where the next unique element should be placed
    let k: number = 1;

    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous one, it's unique
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}