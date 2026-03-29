class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    // If list is empty or has only one node, no duplicates possible
    if (!head) return null;

    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Found a duplicate: skip the next node
            current.next = current.next.next;
        } else {
            // No duplicate: move the pointer forward
            current = current.next;
        }
    }

    return head;
}