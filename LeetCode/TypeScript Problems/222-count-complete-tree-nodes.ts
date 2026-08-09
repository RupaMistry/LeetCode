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

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    // 1. Measure the leftmost height
    let leftDepth = 0;
    let leftCurr: TreeNode | null = root;
    while (leftCurr) {
        leftDepth++;
        leftCurr = leftCurr.left;
    }

    // 2. Measure the rightmost height
    let rightDepth = 0;
    let rightCurr: TreeNode | null = root;
    while (rightCurr) {
        rightDepth++;
        rightCurr = rightCurr.right;
    }

    // 3. If heights match, it's a perfect binary tree: 2^h - 1
    if (leftDepth === rightDepth) {
        return (1 << leftDepth) - 1;
    }

    // 4. Otherwise, count root (1) + left subtree + right subtree
    return 1 + countNodes(root.left) + countNodes(root.right);
}