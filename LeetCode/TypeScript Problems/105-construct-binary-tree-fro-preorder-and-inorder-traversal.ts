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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // Map for O(1) lookups of root indices in the inorder array
    const inorderMap = new Map<number, number>();
    inorder.forEach((val, idx) => inorderMap.set(val, idx));

    let preorderIndex = 0;

    const construct = (left: number, right: number): TreeNode | null => {
        // Base Case: No nodes to process in this range
        if (left > right) return null;

        // 1. Pick the current root value from preorder traversal
        const rootVal = preorder[preorderIndex++];
        const root = new TreeNode(rootVal);

        // 2. Find where this root splits the inorder array
        const splitIndex = inorderMap.get(rootVal)!;

        // 3. Recursively build the left and right subtrees
        // Important: Left MUST be called first because preorder follows Root -> Left -> Right
        root.left = construct(left, splitIndex - 1);
        root.right = construct(splitIndex + 1, right);

        return root;
    };

    return construct(0, inorder.length - 1);
}