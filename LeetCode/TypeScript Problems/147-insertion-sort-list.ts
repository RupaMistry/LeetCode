// Definition for a singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    // This acts as the anchor for our new, sorted list
    const dummy = new ListNode(0);
    let current: ListNode | null = head;

    while (current) {
        // Remember the next unsorted node before we disconnect 'current'
        const nextTarget: ListNode | null = current.next;

        // Start scanning the sorted list from the absolute beginning
        let prev = dummy;

        // Advance 'prev' until the next node's value is greater than or equal to current's value
        while (prev.next !== null && prev.next.val < current.val) {
            prev = prev.next;
        }

        // Insert 'current' right between 'prev' and 'prev.next'
        current.next = prev.next;
        prev.next = current;

        // Step forward to the next unsorted item we saved earlier
        current = nextTarget;
    }

    return dummy.next;
}