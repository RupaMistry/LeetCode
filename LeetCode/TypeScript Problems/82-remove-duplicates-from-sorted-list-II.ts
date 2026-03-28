class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    // Dummy node points to head to handle cases where head is deleted
    const dummy = new ListNode(0, head);
    let prev = dummy;

    while (head !== null) {
        // If it's a beginning of duplicates range
        if (head.next !== null && head.val === head.next.val) {
            // Move head until it points to the last node of the duplicates range
            while (head.next !== null && head.val === head.next.val) {
                head = head.next;
            }
            // Skip all duplicates by linking prev to the node after the last duplicate
            prev.next = head.next;
        } else {
            // No duplicate, move prev forward
            prev = prev.next!;
        }
        // Move head forward for the next check
        head = head.next;
    }

    return dummy.next;
}