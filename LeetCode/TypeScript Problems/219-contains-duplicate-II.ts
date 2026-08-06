function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const lastSeen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (lastSeen.has(num) && i - lastSeen.get(num)! <= k) {
            return true;
        }

        lastSeen.set(num, i);
    }

    return false;
}