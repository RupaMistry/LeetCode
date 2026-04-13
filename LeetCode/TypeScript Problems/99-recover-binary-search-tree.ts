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

function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;

    // Helper for Inorder Traversal
    const traverse = (node: TreeNode | null) => {
        if (!node) return;

        traverse(node.left);

        // Logic to identify the swapped nodes
        if (prev !== null && prev.val > node.val) {
            // If this is the first time we find a violation, 
            // the 'prev' node is at fault.
            if (first === null) {
                first = prev;
            }
            // If we find a violation, the 'node' (current) is 
            // always a candidate for being the second swapped node.
            second = node;
        }

        // Move prev forward
        prev = node;

        traverse(node.right);
    };

    traverse(root);

    // Swap the values of the two nodes we found
    if (first !== null && second !== null) {
        const temp = (first as TreeNode).val;
        (first as TreeNode).val = (second as TreeNode).val;
        (second as TreeNode).val = temp;
    }
}