// Definition for a binary tree node
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

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (!root) return result;

    // Use a stack to mimic the recursion call stack
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        // 1. Process "Me"
        const currentNode = stack.pop()!;
        result.push(currentNode.val);

        // 2. Push Right child first so it gets processed LATER
        if (currentNode.right) {
            stack.push(currentNode.right);
        }

        // 3. Push Left child second so it sits on top and gets processed NEXT
        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }

    return result;
}