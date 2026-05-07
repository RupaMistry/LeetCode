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

function flatten(root: TreeNode | null): void {
    // This variable keeps track of the node that will follow the current one
    let prev: TreeNode | null = null;

    const build = (node: TreeNode | null) => {
        if (!node) return;

        // 1. Traverse Right first, then Left (Reverse Pre-order)
        build(node.right);
        build(node.left);

        // 2. The "Flattening" logic
        // Point this node's right to the previously processed node
        node.right = prev;
        // The problem requires all left pointers to be null
        node.left = null;

        // 3. Current node becomes the 'prev' for the next step up the recursion
        prev = node;
    };

    build(root);
}