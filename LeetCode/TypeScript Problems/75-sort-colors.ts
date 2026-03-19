 function sortColors(nums: number[]): void {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Found a Red: Swap with the 'low' pointer and move both forward
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Found a White: Already in the middle section, just move mid forward
            mid++;
        } else {
            // Found a Blue (nums[mid] === 2): Swap with the 'high' pointer
            // Move high backward, but DO NOT move mid yet because the swapped 
            // value from high is unknown and needs to be checked.
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high--;
        }
    }
}