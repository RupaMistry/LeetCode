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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Helper function to build the tree using index boundaries
    const build = (left: number, right: number): TreeNode | null => {
        // Base case: if the range is invalid, we've reached a leaf's child
        if (left > right) return null;

        // Choose the middle element to ensure the tree remains balanced
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        // Recursively build the left and right subtrees
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    };

    return build(0, nums.length - 1);
}