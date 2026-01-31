function threeSumClosest(nums: number[], target: number): number {
    // 1. Sort the array numerically
    nums.sort((a, b) => a - b);

    // Initialize closestSum with the sum of the first three elements
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // If we found the exact target, return it immediately
            if (currentSum === target) {
                return currentSum;
            }

            // If this new sum is closer to the target than our previous best
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            // Move pointers to try and get closer to the target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}