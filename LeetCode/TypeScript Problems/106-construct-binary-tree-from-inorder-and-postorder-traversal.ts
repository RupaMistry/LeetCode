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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    // Map inorder values to their indices for O(1) lookup
    const inorderMap = new Map<number, number>();
    inorder.forEach((val, idx) => inorderMap.set(val, idx));

    // Start from the end of the postorder array
    let postIdx = postorder.length - 1;

    const construct = (left: number, right: number): TreeNode | null => {
        // Base case: no more nodes to process in this range
        if (left > right) return null;

        // The current root is the last element in the current postorder segment
        const rootVal = postorder[postIdx--];
        const root = new TreeNode(rootVal);

        // Find where the root is in the inorder array to split left/right subtrees
        const splitIndex = inorderMap.get(rootVal)!;

        // IMPORTANT: We MUST build the right subtree first.
        // Since we are moving backwards through postorder (Left -> Right -> Root),
        // the element immediately before the Root is the Right child.
        root.right = construct(splitIndex + 1, right);
        root.left = construct(left, splitIndex - 1);

        return root;
    };

    return construct(0, inorder.length - 1);
}