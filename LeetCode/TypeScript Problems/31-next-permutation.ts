/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;

    // 1. Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. If the array isn't entirely descending
    if (i >= 0) {
        let j = nums.length - 1;
        // Find the element to swap with
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }

    // 3. Reverse the elements to the right of the pivot
    reverse(nums, i + 1);
}

function swap(nums: number[], i: number, j: number): void {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums: number[], start: number): void {
    let end = nums.length - 1;
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}