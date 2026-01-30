function threeSum(nums: number[]): number[][] {
    const results: number[][] = [];
    // 1. Sort the array numerically
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // If the current number is > 0, the sum can never be 0 (since array is sorted)
        if (nums[i] > 0) break;

        // Skip the same element to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers inward
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }

    return results;
}