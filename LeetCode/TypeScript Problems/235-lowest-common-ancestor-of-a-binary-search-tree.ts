// Definition for a binary tree node.
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

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (!root || !p || !q) return null;

    let current: TreeNode | null = root;

    while (current !== null) {
        if (p.val < current.val && q.val < current.val) {
            // Both nodes are in the left subtree
            current = current.left;
        } else if (p.val > current.val && q.val > current.val) {
            // Both nodes are in the right subtree
            current = current.right;
        } else {
            // Split point reached: current is the LCA
            return current;
        }
    }

    return null;
}