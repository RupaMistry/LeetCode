function jump(nums: number[]): number {
    const n = nums.length;
    if (n <= 1) return 0;

    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;

    // We don't need to jump from the last element, so iterate to n - 1
    for (let i = 0; i < n - 1; i++) {
        // Update the farthest point we can reach from the current index
        farthest = Math.max(farthest, i + nums[i]);

        // If we have reached the end of the current jump's range
        if (i === currentJumpEnd) {
            jumps++;             // Take another jump
            currentJumpEnd = farthest; // Update the boundary to the new farthest

            // Optimization: if we can already reach the end, exit early
            if (currentJumpEnd >= n - 1) break;
        }
    }

    return jumps;
}