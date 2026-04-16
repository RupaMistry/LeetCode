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

function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (!root) return result;

    // A simple array acting as a queue
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        // levelSize tells us how many nodes belong to the CURRENT level
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!; // Remove the first element

            currentLevel.push(node.val);

            // Queue up the children for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // We finished one horizontal slice of the tree
        result.push(currentLevel);
    }

    return result;
}