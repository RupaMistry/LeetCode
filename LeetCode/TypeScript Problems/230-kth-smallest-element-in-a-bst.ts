// Definition for a binary tree node.
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

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current !== null || stack.length > 0) {
        // 1. Traverse all the way to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // 2. Process the smallest unvisited node
        current = stack.pop()!;
        k--;

        // 3. When k hits 0, we found our target
        if (k === 0) {
            return current.val;
        }

        // 4. Move to right subtree
        current = current.right;
    }

    return -1; // Fallback (should not be reached for valid BST and 1 <= k <= N)
}
 