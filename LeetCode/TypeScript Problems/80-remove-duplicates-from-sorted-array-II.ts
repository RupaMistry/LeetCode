function removeDuplicates(nums: number[]): number {
    // If the array has 2 or fewer elements, no need to process
    if (nums.length <= 2) return nums.length;

    // 'k' is the write pointer, starting at index 2
    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        // Compare current element with the element 2 positions back 
        // in the "valid" portion of the array.
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}