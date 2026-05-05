class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // 1. If we've reached a null branch, this path is a dead end
    if (!root) {
        return false;
    }

    // 2. Check if we are at a leaf node
    if (!root.left && !root.right) {
        // Does the remaining sum equal the leaf's value?
        return targetSum === root.val;
    }

    // 3. Recurse down to children with the updated target sum
    // We use OR because we only need ONE path to be valid
    const newTarget = targetSum - root.val;
    return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}