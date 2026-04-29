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

function isBalanced(root: TreeNode | null): boolean {
    // Helper returns the height of the tree if balanced, or -1 if unbalanced
    const getHeight = (node: TreeNode | null): number => {
        if (!node) return 0;

        // 1. Get height of left subtree
        const leftHeight = getHeight(node.left);
        if (leftHeight === -1) return -1; // Already unbalanced below us

        // 2. Get height of right subtree
        const rightHeight = getHeight(node.right);
        if (rightHeight === -1) return -1; // Already unbalanced below us

        // 3. Check current node's balance
        // If the gap is > 1, this subtree is unbalanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // 4. Otherwise, return the actual height
        return Math.max(leftHeight, rightHeight) + 1;
    };

    return getHeight(root) !== -1;
}