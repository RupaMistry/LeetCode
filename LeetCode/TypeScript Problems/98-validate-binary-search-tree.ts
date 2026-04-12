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

function isValidBST(root: TreeNode | null): boolean {
    // Helper function to carry the allowed range down the recursion
    const validate = (node: TreeNode | null, min: number | null, max: number | null): boolean => {
        // An empty tree is technically a valid BST
        if (!node) return true;

        // Check if current node violates the min/max constraints
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        // Recursively check subtrees:
        // Left: must be less than current val (new max)
        // Right: must be greater than current val (new min)
        return validate(node.left, min, node.val) &&
            validate(node.right, node.val, max);
    };

    return validate(root, null, null);
}