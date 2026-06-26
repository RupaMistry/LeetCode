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

class BSTIterator {
    // The manual call stack to simulate the state of an in-order traversal
    private stack: TreeNode[];
    constructor(root: TreeNode | null) {
        this.stack = [];
        // Prime the engine by loading the absolute smallest elements on the left spine
        this.pushAllLeft(root);
    }

    next(): number {
        // The node at the top of the stack is guaranteed to be the next minimal element
        const currentNode = this.stack.pop()!;

        // If the processed node has a right subtree, we must pivot to it 
        // and instantly seek out its leftmost descendants.
        if (currentNode.right !== null) {
            this.pushAllLeft(currentNode.right);
        }

        return currentNode.val;
    }

    hasNext(): boolean {
        // If the stack contains elements, another sorted value exists
        return this.stack.length > 0;
    }

    /**
     * Helper function that pushes a node and all of its direct left descendants onto the stack
     */
    private pushAllLeft(node: TreeNode | null): void {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */