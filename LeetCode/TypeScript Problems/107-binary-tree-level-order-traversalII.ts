/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function levelOrderBottom(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (!root) return result;

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        // Process all nodes at the current depth
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            currentLevel.push(node.val);

            // Add children to the queue for the next depth
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Add the current level to the BEGINNING of the result array
        // This naturally creates the bottom-up order
        result.unshift(currentLevel);
    }

    return result;
}