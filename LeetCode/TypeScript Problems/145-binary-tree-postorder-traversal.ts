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

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (!root) return result;

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop()!;

        // Always add to the front of the array to automatically reverse the path
        result.unshift(currentNode.val);

        // Push Left first so Right sits on top and gets popped next
        if (currentNode.left) {
            stack.push(currentNode.left);
        }

        // Push Right second so it is processed immediately
        if (currentNode.right) {
            stack.push(currentNode.right);
        }
    }

    return result;
}