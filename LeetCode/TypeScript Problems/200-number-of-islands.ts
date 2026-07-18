function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function to sink connected land recursively
    const sinkIsland = (r: number, c: number): void => {
        // Bounds check and water check
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            grid[r][c] === '0'
        ) {
            return;
        }

        // Sink current land cell
        grid[r][c] = '0';

        // Traverse all 4 cardinal directions
        sinkIsland(r - 1, c); // Up
        sinkIsland(r + 1, c); // Down
        sinkIsland(r, c - 1); // Left
        sinkIsland(r, c + 1); // Right
    };

    // Scan through every cell in the grid matrix
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                sinkIsland(r, c); // Sink all connected land to prevent re-counting
            }
        }
    }

    return islandCount;
}