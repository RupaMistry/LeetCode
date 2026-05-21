class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sumNumbers(root: TreeNode | null): number {

    // Internal helper to keep track of the number we're building
    function dfs(node: TreeNode | null, currentSum: number): number {
        if (!node) return 0;

        // "Shift" the current number left and add the new digit
        const nextSum = currentSum * 10 + node.val;

        // If it's a leaf, we've finished building one complete number
        if (!node.left && !node.right) {
            return nextSum;
        }

        // Otherwise, keep going down both paths and combine their totals
        return dfs(node.left, nextSum) + dfs(node.right, nextSum);
    }

    return dfs(root, 0);
}