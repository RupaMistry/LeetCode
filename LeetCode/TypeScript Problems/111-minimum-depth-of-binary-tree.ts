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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;

    // A queue of [node, currentDepth]
    // Or just track depth level-by-level in the loop
    const queue: TreeNode[] = [root];
    let depth = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;

        // Process all nodes currently at this depth level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            // The moment we find a leaf, it's the closest one
            if (!node.left && !node.right) {
                return depth;
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Move to the next level
        depth++;
    }

    return depth;
}