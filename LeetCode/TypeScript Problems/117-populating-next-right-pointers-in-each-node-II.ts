class _Node {
    val: number;
    left: _Node | null;
    right: _Node | null;
    next: _Node | null;

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = (next === undefined ? null : next);
    }
}

function connect(root: _Node | null): _Node | null {
    if (!root) return null;

    // 'curr' is the node we are currently visiting on the "parent" level
    let curr: _Node | null = root;

    while (curr) {
        // Dummy node acts as a placeholder for the start of the next level
        let dummy = new _Node(0);
        let tail = dummy;

        // Walk across the current level using .next pointers
        while (curr) {
            if (curr.left) {
                tail.next = curr.left;
                tail = tail.next;
            }
            if (curr.right) {
                tail.next = curr.right;
                tail = tail.next;
            }
            // Move to the next neighbor on the same parent level
            curr = curr.next;
        }

        // After finishing the current level, move 'curr' to the start 
        // of the level we just finished stitching together.
        curr = dummy.next;
    }

    return root;
}