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

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const traverse = (node: TreeNode | null) => {
        if (!node) return;

        traverse(node.left);  // 1. Go Left
        result.push(node.val); // 2. Visit Node
        traverse(node.right); // 3. Go Right
    };

    traverse(root);
    return result;
}