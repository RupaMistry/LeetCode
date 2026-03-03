function canJump(nums: number[]): boolean {
    let maxReach = 0;
    const target = nums.length - 1;

    for (let i = 0; i <= maxReach; i++) {
        // Update the furthest index we can reach
        maxReach = Math.max(maxReach, i + nums[i]);

        // If we can reach or pass the last index, return true
        if (maxReach >= target) {
            return true;
        }

        // Safety check: if the loop would end but we haven't reached target
        // (This is implicitly handled by the loop condition i <= maxReach)
    }

    return false;
}