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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 1. If both are null, we've reached the end of matching branches
    if (!p && !q) return true;

    // 2. If one is null and the other isn't, they are different
    if (!p || !q) return false;

    // 3. If values don't match, they aren't the same
    if (p.val !== q.val) return false;

    // 4. Check the left and right subtrees recursively
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}