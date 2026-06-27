function calculateMinimumHP(dungeon: number[][]): number {
    const m = dungeon.length;
    const n = dungeon[0].length;

    // Create a 2D grid to store the minimum health required at each room checkpoint
    const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

    // 1. Initialize the Princess's room (Bottom-Right Corner)
    // To survive after rescuing the princess, the knight must have at least 1 HP remaining.
    dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

    // 2. Fill the last column (can only move DOWN to progress)
    for (let r = m - 2; r >= 0; r--) {
        dp[r][n - 1] = Math.max(1, dp[r + 1][n - 1] - dungeon[r][n - 1]);
    }

    // 3. Fill the last row (can only move RIGHT to progress)
    for (let c = n - 2; c >= 0; c--) {
        dp[m - 1][c] = Math.max(1, dp[m - 1][c + 1] - dungeon[m - 1][c]);
    }

    // 4. Fill the rest of the dungeon moving backward row by row, column by column
    for (let r = m - 2; r >= 0; r--) {
        for (let c = n - 2; c >= 0; c--) {
            // Choose the path of least resistance (minimum health required between right and down)
            const minNextHealth = Math.min(dp[r + 1][c], dp[r][c + 1]);
            
            // Calculate and clamp the survival requirement for the current room
            dp[r][c] = Math.max(1, minNextHealth - dungeon[r][c]);
        }
    }

    // The starting room now holds the absolute minimum health required to complete the mission
    return dp[0][0];
}