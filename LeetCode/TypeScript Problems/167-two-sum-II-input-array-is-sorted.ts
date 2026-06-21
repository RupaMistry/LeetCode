function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            // The problem requires a 1-indexed array result
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            // The sum is too small; increase the lower bound to get a larger value
            left++;
        } else {
            // The sum is too large; decrease the upper bound to get a smaller value
            right--;
        }
    }

    // The problem guarantees exactly one solution, so this fallback is rarely hit
    return [];
}