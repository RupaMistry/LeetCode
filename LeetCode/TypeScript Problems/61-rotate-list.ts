class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // Edge case: empty list, single node, or no rotation needed
    if (!head || !head.next || k === 0) return head;

    // 1. Calculate length and find the actual tail
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // 2. Adjust k (if k > length)
    k = k % length;
    if (k === 0) return head;

    // 3. Connect tail to head to form a circle
    tail.next = head;

    // 4. Find the new tail: it is at (length - k - 1) steps from head
    let newTailSteps = length - k;
    let newTail = tail; // Starting from old tail to move length-k steps

    while (newTailSteps > 0) {
        newTail = newTail.next!;
        newTailSteps--;
    }

    // 5. Break the circle
    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
}