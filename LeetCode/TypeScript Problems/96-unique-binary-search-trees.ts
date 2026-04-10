function numTrees(n: number): number {
    // dp[i] will store the number of unique BSTs that can be formed with i nodes
    const dp = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 1; // An empty tree is still 1 "structural" way
    dp[1] = 1; // A tree with one node is just 1 way

    // We build up the solution from 2 nodes up to n
    for (let nodes = 2; nodes <= n; nodes++) {
        // For a tree with 'nodes' total nodes, try each one as the root
        for (let root = 1; root <= nodes; root++) {
            const leftNodes = root - 1;
            const rightNodes = nodes - root;
            
            // The number of combinations is left options * right options
            dp[nodes] += dp[leftNodes] * dp[rightNodes];
        }
    }

    return dp[n];
}