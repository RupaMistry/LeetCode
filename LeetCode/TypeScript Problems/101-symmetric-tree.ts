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

function isSymmetric(root: TreeNode | null): boolean {
    // An empty tree is technically symmetric
    if (!root) return true;

    // We need a helper to compare two different subtrees as mirrors
    const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
        // 1. Both are null? Perfect match.
        if (!t1 && !t2) return true;

        // 2. One is null or values don't match? Not symmetric.
        if (!t1 || !t2 || t1.val !== t2.val) return false;

        // 3. This is the "mirror" step:
        // Compare t1's left with t2's right 
        // AND t1's right with t2's left
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };

    return isMirror(root.left, root.right);
}