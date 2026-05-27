function singleNumber(nums: number[]): number {
    let result = 0;

    // Loop through every bit position for a 32-bit integer
    for (let bit = 0; bit < 32; bit++) {
        let bitSum = 0;

        // Count how many numbers have a '1' at the current bit position
        for (let i = 0; i < nums.length; i++) {
            // (nums[i] >> bit) & 1 isolates the bit at the current position
            bitSum += (nums[i] >> bit) & 1;
        }

        // If the sum is not a multiple of 3, this bit belongs to the single number
        if (bitSum % 3 !== 0) {
            // Set the bit at the current position in our result
            result |= (1 << bit);
        }
    }

    return result;
}