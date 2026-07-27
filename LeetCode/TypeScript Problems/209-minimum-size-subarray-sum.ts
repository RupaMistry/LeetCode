function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        // Shrink window from the left as long as the target sum condition is met
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}