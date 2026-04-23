/* Definition for a binary tree node. */
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


function maxDepth(root: TreeNode | null): number {
    // Base Case: An empty tree has a depth of 0
    if (!root) {
        return 0;
    }

    // Recursively find the height of each subtree
    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);

    // The height of this node is the taller of its children + 1 (itself)
    return Math.max(leftHeight, rightHeight) + 1;
}