/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;

    // Normalize k in case k is larger than the array length
    k %= n;
    if (k === 0) return;

    // Helper function to reverse elements between two indices in-place
    const reverse = (start: number, end: number): void => {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    };

    // 1. Reverse the entire array
    reverse(0, n - 1);

    // 2. Reverse the first k elements
    reverse(0, k - 1);

    // 3. Reverse the rest of the array from index k to the end
    reverse(k, n - 1);
}