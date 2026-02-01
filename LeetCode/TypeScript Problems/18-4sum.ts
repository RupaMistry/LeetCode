function fourSum(nums: number[], target: number): number[][] {
    const results: number[][] = [];
    const n = nums.length;

    // 1. Numeric sort
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate for first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Optimization: If the smallest 4 numbers are > target, stop
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        // Optimization: If current i plus the 3 largest numbers < target, skip i
        if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate for second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // Similar optimizations for j
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicates for the third and fourth numbers
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return results;
}