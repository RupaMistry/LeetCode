// Definition for a Node
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

    // We start with the root. 'currLevel' represents the start of the level we are currently on.
    let currLevel: _Node | null = root;

    // While there is a level below to connect
    while (currLevel.left) {
        let head: _Node | null = currLevel;

        while (head) {
            // 1. Connect the left child to the right child (same parent)
            head.left!.next = head.right;

            // 2. Connect the right child to the neighbor's left child (different parents)
            if (head.next) {
                head.right!.next = head.next.left;
            }

            // Move horizontally across the current level
            head = head.next;
        }

        // Move vertically to the start of the next level
        currLevel = currLevel.left;
    }

    return root;
}