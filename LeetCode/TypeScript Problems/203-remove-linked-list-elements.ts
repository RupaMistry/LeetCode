// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // Dummy node points to head to simplify edge cases where head needs to be deleted
    const dummy = new ListNode(0, head);
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            // Unlink/bypass the matching node
            current.next = current.next.next;
        } else {
            // Move pointer forward only when no deletion occurred
            current = current.next;
        }
    }

    return dummy.next;
}