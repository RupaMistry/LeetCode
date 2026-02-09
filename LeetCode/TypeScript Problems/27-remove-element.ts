function removeElement(nums: number[], val: number): number {
    // k tracks the index for the next element that is NOT 'val'
    let k: number = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current element is not the value we want to remove
        if (nums[i] !== val) {
            // Move it to the front at index k
            nums[k] = nums[i];
            // Increment k to prepare for the next valid element
            k++;
        }
    }

    // k represents the count of elements not equal to val
    return k;
};