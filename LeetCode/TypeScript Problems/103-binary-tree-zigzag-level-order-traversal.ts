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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let isLeftToRight = true;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if (isLeftToRight) {
                // Normal order: add to the end
                currentLevel.push(node.val);
            } else {
                // Reverse order: add to the beginning
                currentLevel.unshift(node.val);
            }

            // Always add children to the queue in the same order (left to right)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
        // Flip the direction for the next level
        isLeftToRight = !isLeftToRight;
    }

    return result;
}