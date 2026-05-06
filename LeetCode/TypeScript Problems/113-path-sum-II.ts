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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];
    const currentPath: number[] = [];

    function traverse(node: TreeNode | null, remainingSum: number): void {
        // Base case: hit a null end
        if (!node) return;

        // 1. Add current node to our path
        currentPath.push(node.val);

        // 2. Check if it's a leaf node and the sum is satisfied
        const isLeaf = !node.left && !node.right;
        if (isLeaf && remainingSum === node.val) {
            // Success! Store a CLONE of the current path
            result.push([...currentPath]);
        } else {
            // 3. Otherwise, keep digging
            traverse(node.left, remainingSum - node.val);
            traverse(node.right, remainingSum - node.val);
        }

        // 4. Backtrack: Remove ourselves from the path before going back up
        // This is the "cleaning up" step
        currentPath.pop();
    }

    traverse(root, targetSum);
    return result;
}