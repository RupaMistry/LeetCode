class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
    // Base cases
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val);

    // Use Slow and Fast pointers to find the middle
    let prev: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    // 'slow' is now the middle node. 
    // Disconnect the left half from the middle node.
    if (prev) {
        prev.next = null;
    }

    // Create the root from the middle node
    const root = new TreeNode(slow!.val);

    // Recursively build the subtrees
    // The head now only points to the nodes before the middle
    root.left = sortedListToBST(head);
    // The right half starts after the middle
    root.right = sortedListToBST(slow!.next);

    return root;
}